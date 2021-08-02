import * as React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Icon from "../../components/Icon/Icon";
import Score from "../../components/Score/Score";
import StarRating from "../../components/StarRating/StarRating";
import AnswersList from "../../components/AnswerList/AnswersList";
import Button from "../../components/Button/Button";
import { emptyQuestion } from "../../store/actions/rootActions";
import { Routes } from "../../routing/constnts";
import { State } from "../../store/reducers/rootReducer";
import "./FinalScreen.css";

type IProps = {} & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class FinalScreen extends React.Component<IProps, any> {
  handleClickBack = () => {
    this.props.emptyQuestions();
  }

  render() {
    const { questions, questionsCount } = this.props;

    if (questions === null || questionsCount === undefined) {
      return <Redirect to={Routes.WELCOME_SCREEN}/>;
    }

    const score = questions.filter(question => question.correct_answer === question.user_answer).length;

    return (
      <main className="final-screen">
        <div className="final-screen__content-wrapper">
          <div className="final-screen__results-wrapper">
            <div className="final-screen__results-wrapper__score">
              <div className="final-screen__icon">
                <Icon name='user'/>
              </div>
              <h1 className="final-score__hero">You scored</h1>
              <Score
                score={score}
                count={questionsCount}
                className="final-screen__score"
                classNameStrong="final-screen__strong"
              />
            </div>
            <Link to={Routes.WELCOME_SCREEN} onClick={this.handleClickBack}>
              <Icon name="cancel" className="final-screen__link"/>
            </Link>
          </div>
          <StarRating
            score={score}
            count={questionsCount}
            className="final-screen__rating"
            classNameStar="final-screen__rating-star"
          />
          <AnswersList questions={questions} className="final-screen__list"/>
          <Button type='accent' to={Routes.QUIZ_SCREEN} className="final-screen__again">PLAY AGAIN</Button>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    questions: state.questions,
    questionsCount: state.questions?.length
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    emptyQuestions: () => dispatch(emptyQuestion()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FinalScreen);
