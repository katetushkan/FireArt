import * as React from "react";
import clsx from "clsx";

import { numericOnly } from "../../services/utils";
import InputLabel from "../InputLabel/InputLabel";

import './InputField.css';

interface IProps {
  name: string;
  icon?: JSX.Element;
  label: string;
  value: string;
  type: 'text' | 'number';
  onChange: (name: string, value: string) => void;
  className?: string;
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
    const { name, label, icon, type, value, className } = this.props;

    return (
      <InputLabel
        className={clsx('input-field', className)}
        icon={icon}
        label={label}
      >
        <input
          type={type}
          className="input-field__input"
          name={name}
          value={value}
          onChange={this.onFieldChange}
        />
      </InputLabel>
    )
  }
}

export default InputField;