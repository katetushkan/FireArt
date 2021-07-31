import React from "react";
import Selector from "../../components/Form/Selector";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import { Difficulty } from "../../models/Question";
import { getQuestions } from "../../store/actions/rootActions";
import { Redirect } from "react-router";
import { State } from "../../store/reducers/rootReducer";
import { Routes } from "../../routing/constnts";
import Icon from "../../components/Icon/Icon";
import { connect } from "react-redux";

import "./WelcomScreenConfigForm.css"

type IProps = {}
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>;

interface IState {
  amount: string,
  difficulty: Difficulty,
}

class WelcomeScreenConfigForm extends React.Component<IProps, IState> {

  state = {
    amount: "10",
    difficulty: Difficulty.HARD,
  }

  handleChange = (field: string, value: string) => {
    this.setState({
      [field]: value
    } as Pick<IState, keyof IState>);
  }

  handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    const amount = this.state.amount
    const difficulty = this.state.difficulty
    await this.props.getAllQuestions(parseInt(amount), difficulty)
  }

  render() {
    const { questions } = this.props;
    const { amount } = this.state;

    if (questions !== null) {
      return <Redirect to={Routes.QUIZ_SCREEN}/>;
    }

    return (
      <form className="welcome-screen__form">
        <Selector onChangeHandler={this.handleChange}/>
        <InputField
          name="amount"
          icon={<Icon name='coin'/>}
          label="Amount"
          type="number"
          value={amount}
          onChange={this.handleChange}
        />
        <Button
          value="true"
          className="welcome-screen__submit"
          type="accent"
          onClick={this.handleClick}
        >
          true
        </Button>
      </form>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    questions: state.questions,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllQuestions: (amount: number, difficulty: Difficulty) => dispatch(getQuestions(amount, difficulty, 'boolean')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreenConfigForm);