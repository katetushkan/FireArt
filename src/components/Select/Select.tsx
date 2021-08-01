import * as React from "react";
import clsx from "clsx";

import InputLabel from "../InputLabel/InputLabel";

import { Difficulty } from "../../models/Question";

import "./Select.css"

interface IProps {
  className?: string;
  name: string;
  label: string;
  icon?: JSX.Element;
  onChangeHandler: any;
}

class Select extends React.Component<IProps> {

  onFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChangeHandler(fieldName, fieldValue);
  }

  render() {
    const { name, label, icon, className } = this.props;

    return (
      <InputLabel
        className={clsx('select', className)}
        label={label}
        icon={icon}
      >
        <div className="select__input-wrapper">
          <select name={name} className="select__input" onChange={this.onFieldChange}>
            <option value={Difficulty.HARD}>{Difficulty.HARD}</option>
            <option value={Difficulty.EASY}>{Difficulty.EASY}</option>
          </select>
        </div>
      </InputLabel>
    );
  }
}

export default Select;