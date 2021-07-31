import React from "react";
import Icon from "../components/Icon/Icon";
import Score from "../components/Score/Score";
import StarRating from "../components/StarRating/StarRating";
import { Redirect, RouteComponentProps, withRouter } from "react-router";
import AnswersList from "../pages/FinalScreen/AnswersList";
import Button from "../components/Button/Button";
import { emptyQuestion } from "../store/actions/rootActions";
import { Link } from "react-router-dom";
import { Routes } from "../routing/constnts";
import { connect } from "react-redux";
import { State } from "../store/reducers/rootReducer";

type IProps = {} & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class FinalScreen extends React.Component<RouteComponentProps & IProps, any> {
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
          <Link to={Routes.WELCOME_SCREEN} onClick={this.handleClickBack}>
            <Icon name="cancel"/>
          </Link>
          <div className="final-score-wrapper">
            <div className="user-icon-frame">
              <Icon name='user'/>
            </div>
          </div>
          <h1 className="final-score_h1">You scored</h1>
          <Score
            score={score}
            count={questionsCount}
          />
          <StarRating score={score} count={questionsCount}/>
          <AnswersList questions={questions}/>
          <Button type='accent' to={Routes.QUIZ_SCREEN}>PLAY AGAIN</Button>
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FinalScreen));
