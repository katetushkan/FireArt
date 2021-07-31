import React from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import QuestionCard from "../pages/QuizScreen/QuestionCard";
import { answerQuestion, emptyQuestion } from "../store/actions/rootActions";
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router";
import { Routes } from "../routing/constnts";
import Icon from "../components/Icon/Icon";
import { Link } from "react-router-dom";
import { State } from "../store/reducers/rootReducer";
import { shuffleArray } from "../services/utils";

interface IState {
  currentQuestionIndex: number
}

type IProps = {} & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

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
    })
  }

  handleClickBack = () => {
    this.props.emptyQuestions();
  }

  render() {
    const { questions, questionCount } = this.props;
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
      <div className="quiz-screen-content">
        <Link to={Routes.WELCOME_SCREEN} onClick={this.handleClickBack}>
          <Icon name="cancel"/>
        </Link>
        <h1 className="quiz-screen-content__topic">{currentQuestion.category}</h1>
        <h3 className="quiz-screen-content__level">level {currentQuestionIndex + 1}</h3>
        <ProgressBar score={currentQuestionIndex + 1} count={questionCount}/>
        <QuestionCard
          question={currentQuestion.question}
          answers={answers}
          onAnswer={this.handleQuestionAnswered}
        />
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
