import React from "react";
import Icon from "../Form/Icon";
import UserIcon from "../../assets/icons/user-icon.svg"
import Score from "../Utils/Score";
import StarRating from "../StarRating/StarRating";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import AnswersList from "./AnswersList";
import Button from "../Button/Button";
import * as routing from "../../routing/constnts";
import {answerQuestion, emptyQuestion} from "../../store/actions/rootActions";
import {Question} from "../../models/Question";

type IProps = {} & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
class FinalScreen extends React.Component<RouteComponentProps & IProps, any>{

    constructor(props:any) {
        super(props);
        this.state = {
            questions: [],
            count: 0,
            score: 0
        }
    }

    getScore = (questions: Question[]) =>{
        let score = 0;
        for (let index = 0; index < questions.length; index++){
            if (!questions[index].incorrect_answers.includes(questions[index].user_answer as string)){
                score++
            }
        }

        return score
    }

    componentDidMount() {
        let questions = this.props.questions
        let score = this.getScore(questions)
        this.setState({
            questions: this.props.questions,
            count: this.props.questions.length,
            score: score
        })
    }

    handleClick = () => {
        const { history } = this.props
        this.props.emptyQuestions();
        history.push(routing.WELCOME_SCREEN)
    }

    render() {
        return (
            <main className="final-screen">
               <div className="final-screen-content-wrapper">
                   <div className="final-score-wrapper">
                       <div className="user-icon-frame">
                           <Icon icon={UserIcon}/>
                       </div>
                   </div>
                   <h1 className="final-score_h1">You scored</h1>
                   <Score score={this.state.score} count={this.state.count}/>
                   <StarRating count={this.state.count}/>
                   <AnswersList questions={this.state.questions}/>
                   <Button value="again" className="accent__button" onClick={this.handleClick.bind(this)}>PLAY AGAIN</Button>
               </div>
            </main>
        )
    }

}

const mapStateToProps = (state: any) => {
    return{
        questions: state.questions,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        emptyQuestions: () => dispatch(emptyQuestion()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FinalScreen));
