import * as React from "react";
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router";
import { Link } from "react-router-dom";

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import QuestionCard from "../../pages/QuizScreen/QuestionCard";
import { answerQuestion, emptyQuestion } from "../../store/actions/rootActions";
import { Routes } from "../../routing/constnts";
import Icon from "../../components/Icon/Icon";
import { State } from "../../store/reducers/rootReducer";
import { shuffleArray } from "../../services/utils";

import "./QuizScreenContent.css";
import clsx from "clsx";

interface IState {
  currentQuestionIndex: number,
}

type IProps = {
  className? : string
} & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>;

class QuizScreenContent extends React.Component<RouteComponentProps & IProps, IState> {

  state = {
    currentQuestionIndex: 0,
  }

  handleQuestionAnswered = (value: string) => {
    const { answerQuestion } = this.props;
    const { currentQuestionIndex } = this.state;

    answerQuestion(value, currentQuestionIndex);
    this.setState({
      currentQuestionIndex: currentQuestionIndex + 1
    });
    (document.activeElement as HTMLElement)?.blur();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  handleClickBack = () => {
    this.props.emptyQuestions();
  }

  render() {
    const { questions, questionCount, className } = this.props;
    const { currentQuestionIndex } = this.state;

    if (questions === null || questionCount === undefined) {
      return <Redirect to={Routes.WELCOME_SCREEN}/>;
    }

    if (currentQuestionIndex >= questionCount) {
      return <Redirect to={Routes.FINAL_SCREEN}/>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const answers = shuffleArray([...currentQuestion.incorrect_answers, currentQuestion.correct_answer]);

    return (
      <div className={clsx('quiz-screen-content', className)}>
        <Link to={Routes.WELCOME_SCREEN} onClick={this.handleClickBack} >
          <Icon name="cancel" className="quiz-screen-content__link"/>
        </Link>
        <div className="quiz-screen-content__wrapper">
          <h1 className="quiz-screen-content__topic">{currentQuestion.category}</h1>
          <h3 className="quiz-screen-content__level">level {currentQuestionIndex + 1}</h3>
          <ProgressBar className="quiz-screen-content__progress-bar" score={currentQuestionIndex + 1} count={questionCount}/>
          <QuestionCard
            question={currentQuestion.question}
            answers={answers}
            onAnswer={this.handleQuestionAnswered}
            className="quiz-screen-content__question-card"
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    questions: state.questions,
    questionCount: state.questions?.length
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    answerQuestion: (value: string, id: number) => dispatch(answerQuestion(value, id)),
    emptyQuestions: () => dispatch(emptyQuestion())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QuizScreenContent));
