import React from "react";
import Selector from "../components/Form/Selector";
import InputField from "../components/Form/InputField";
import Button from "../components/Button/Button";
import {Difficulty} from "../models/Question";
import {getQuestions} from "../store/actions/rootActions";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {State} from "../store/reducers/rootReducer";
import * as routes from "../routing/constnts";

type IProps = {} & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

class WelcomeScreenConfigForm extends React.Component<RouteComponentProps & IProps, any>{

    state = {
        amount: "10",
        difficulty: Difficulty.HARD,
        flag: false
    }

    handleChange = (field: string, value: string) => {
        this.setState({
            [field]: value
        })
    }
    handleClick = async (event: any) => {
        event.preventDefault()
        const amount = this.state.amount
        const difficulty = this.state.difficulty
        await this.props.getAllQuestions(parseInt(amount), difficulty)
    }

    render() {
        const { questions } = this.props;

        if (questions !== null) {
            return <Redirect to={routes.QUIZ_SCREEN} />;
        }

        return(
            <form className="welcome-screen_form">
                <Selector onChangeHandler={this.handleChange.bind(this)}/>
                <InputField onChange={this.handleChange.bind(this)}/>
                <Button value="true" className="accent_button" onClick={this.handleClick.bind(this)}>true</Button>
            </form>
        )
    }
}

const mapStateToProps = (state: State) => {
    return{
        questions: state.questions,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllQuestions: (amount: number, difficulty: Difficulty) => dispatch(getQuestions(amount, difficulty, 'boolean')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WelcomeScreenConfigForm));