import React from "react";
import { numericOnly } from "../../services/utils";

import './InputField.css';

interface IProps {
  name: string;
  icon?: JSX.Element;
  label: string;
  value: string;
  type: 'text' | 'number';
  onChange: (name: string, value: string) => void;
}

class InputField extends React.Component<IProps> {

  onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldValue = event.target.value;
    if (!event.target.validity.valid || !this.validInput(fieldValue)) {
      event.preventDefault();
      return;
    }

    const fieldName = event.target.name;

    const { onChange } = this.props;
    onChange(fieldName, fieldValue);
  }

  validInput = (value: string): boolean => {
    const { type } = this.props;
    if (type === "number") {
      return numericOnly(value);
    }

    return true;
  }

  render() {
    const { name, label, icon, type, value } = this.props;

    return (
      <label className="input-field">
        <p className="input-field__label-wrapper">
          {icon}
          <span className="input-field__label">{label}</span>
        </p>
        <input
          type={type}
          className="welcome-screen_input"
          name={name}
          value={value}
          onChange={this.onFieldChange}
        />
      </label>
    )
  }
}

export default InputField;