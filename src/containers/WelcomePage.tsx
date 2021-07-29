import React from "react";
import {connect} from "react-redux";
import {getQuestions} from "../store/actions/rootActions";
import {Difficulty} from "../models/Question";

class WelcomePage extends React.Component<any, any>{
    state = {
        questions: []
    }

    async componentDidMount() {
        await this.props.getAllQuestions(10, Difficulty.EASY);
    }

    render() {
        return <p>ratatata</p>;
    }
}

const mapStateToProps = (state: any) => {
    return{
        questions: state.questions,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllQuestions: (amount: number, difficulty: Difficulty) => dispatch(getQuestions(amount, difficulty, 'boolean')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);