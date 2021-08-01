import * as React from "react";
import clsx from "clsx";

import './InputLabel.css';

interface IProps {
  className?: string;
  htmlFor?: string;
  icon?: JSX.Element;
  label: string;
}

const InputLabel: React.FC<IProps> = ({ className, htmlFor, icon, label, children }) => {
  return (
    <label className={clsx('input-label', className)} htmlFor={htmlFor}>
      <p className="input-label__wrapper">
        {icon && <span className="input-label__icon">{icon}</span>}
        <span className="input-label__text">{label}</span>
      </p>
      {children}
    </label>
  );
};

export default InputLabel;
