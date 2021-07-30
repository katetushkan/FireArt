import React from "react";
import ProgressBar from "../components/Utils/ProgressBar";
import QuestionCard from "../components/QuizScreen/QuestionCard";
import {answerQuestion, emptyQuestion} from "../store/actions/rootActions";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import * as routes from "../routing/constnts";
import Button from "../components/Button/Button";
import * as routing from "../routing/constnts";

interface State {
    question?: string,
    count: number,
    score: number
}

type IProps = {} & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;
class QuizScreenContent extends React.Component<RouteComponentProps & IProps, State>{

    constructor(props: any) {
        super(props);
        this.state = {
            question: "",
            count: 1,
            score: 1,
        }
    }

    componentDidMount() {
        const { questions }  = this.props
        this.setState({
            count: questions.length,
            question: questions[this.state.score - 1].question
        })
    }

    handleClick = (value: string) => {
        if (this.state.score === this.state.count) {
            this.props.answerQuestion(value, this.state.score - 1)
            const { history } = this.props
            history.push(routes.FINAL_SCREEN)
        }
        else {
            let score = this.state.score + 1
            this.props.answerQuestion(value, this.state.score - 1)
            this.setState({
                score: score
            })
        }
    }

    handleClickBack = () => {
        const { history } = this.props
        this.props.emptyQuestions();
        history.push(routing.WELCOME_SCREEN)
    }

    render() {
        return (
            <div className="quiz-screen-content">
                <Button className="go-back__button" value="back" onClick={this.handleClickBack.bind(this)}/>
                <h1 className="quiz-screen_h1">Welcome to Quiz</h1>
                <h3 className="quiz-screen_h3">level {this.state.score}</h3>
                <ProgressBar score={this.state.score} count={this.state.count}/>
                <QuestionCard question={this.state.question} onButtonClick={this.handleClick.bind(this)}/>
            </div>
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
        answerQuestion: (value: string, id: number) => dispatch(answerQuestion(value, id)),
        emptyQuestions: () => dispatch(emptyQuestion())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QuizScreenContent));
