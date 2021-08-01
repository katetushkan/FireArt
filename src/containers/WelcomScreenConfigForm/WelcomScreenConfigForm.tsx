import * as React from "react";
import { connect } from "react-redux";
import clsx from "clsx";

import Select from "../../components/Select/Select";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import { Difficulty } from "../../models/Question";
import { getQuestions } from "../../store/actions/rootActions";
import { Redirect } from "react-router";
import { State } from "../../store/reducers/rootReducer";
import { Routes } from "../../routing/constnts";
import Icon from "../../components/Icon/Icon";

import "./WelcomScreenConfigForm.css"

type IProps = {
  className?: string;
  }
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
    const { questions, className } = this.props;
    const { amount } = this.state;

    if (questions !== null) {
      return <Redirect to={Routes.QUIZ_SCREEN}/>;
    }

    return (
      <form className={clsx('welcome-screen-config-form', className)}>
        <Select
          className="welcome-screen-config-form__select-difficulty"
          name="difficulty"
          label="Difficulty"
          icon={<Icon name="gamble"/>}
          onChangeHandler={this.handleChange}
        />
        <InputField
          className="welcome-screen-config-form__select-amount"
          name="amount"
          icon={<Icon name='coin'/>}
          label="Amount"
          type="number"
          value={amount}
          onChange={this.handleChange}
        />
        <Button
          value="true"
          className="welcome-screen-config-form__submit"
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