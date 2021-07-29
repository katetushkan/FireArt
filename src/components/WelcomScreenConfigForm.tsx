import React, {Fragment} from "react";
import Selector from "./utils/Selector";
import InputField from "./utils/InputField";
import Button from "./utils/Button";
import {Difficulty} from "../models/Question";
import {getQuestions} from "../store/actions/rootActions";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class WelcomeScreenConfigForm extends React.Component<any, any>{

    state = {
        amount: "10",
        difficulty: Difficulty.HARD,
        questions: false
    }

    handleChange = (field: string, value: string) => {
        this.setState({
            [field]: value
        })
    }
    handleClick = async () => {
        const amount = this.state.amount
        const difficulty = this.state.difficulty
        await this.props.getAllQuestions(parseInt(amount), difficulty)
        this.setState({
            questions: true
        })
    }

    render() {
        return(
            <Fragment>
                {    !this.state.questions ?
                        <form className="welcome-screen_form">
                            <Selector onChangeHandler={this.handleChange.bind(this)}/>
                            <InputField onChangeHandler={this.handleChange.bind(this)}/>
                            <Button className="accent_button" onClickHandler={this.handleClick.bind(this)}/>
                        </form>
                    : <Redirect to="/quiz"/>
                }
            </Fragment>


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
        getAllQuestions: (amount: number, difficulty: Difficulty) => dispatch(getQuestions(amount, difficulty, 'boolean')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreenConfigForm);