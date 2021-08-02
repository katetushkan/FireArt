import * as React from "react";
import clsx from "clsx";

import InputLabel from "../InputLabel/InputLabel";

import "./Select.css"

interface SelectOption {
  name: string;
  value: string;
}

interface IProps {
  className?: string;
  name: string;
  label: string;
  options: SelectOption[];
  icon?: JSX.Element;
  onChangeHandler: (name: string, value: string) => void;
}

class Select extends React.Component<IProps> {

  onFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { onChangeHandler } = this.props;
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    onChangeHandler(fieldName, fieldValue);
  }

  render() {
    const { name, label, options, icon, className } = this.props;

    return (
      <InputLabel
        className={clsx('select', className)}
        label={label}
        icon={icon}
      >
        <div className="select__input-wrapper">
          <select name={name} className="select__input" onChange={this.onFieldChange}>
            {options.map(option => <option value={option.value}>{option.name}</option>)}
          </select>
        </div>
      </InputLabel>
    );
  }
}

export default Select;