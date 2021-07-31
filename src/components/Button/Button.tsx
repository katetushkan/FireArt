import * as React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

import './Button.css';

interface IProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  autoFocus?: boolean;
  value?: string;
  disabled?: boolean;
  type?: 'normal' | 'accent';
  to?: string;
}

class Button extends React.Component<IProps> {

  render() {
    const { onClick, className, children, autoFocus, value, disabled, type, to } = this.props;

    return (
      <>
        {to
        ? <Link
            to={to}
            className={clsx('button', {
              'button--normal': !type || type === 'normal',
              'button--accent': type === 'accent',
            }, className)}
            onClick={onClick}
          >
            {children}
          </Link>
        : <button
            autoFocus={autoFocus}
            className={clsx('button', {
              'button--normal': !type || type === 'normal',
              'button--accent': type === 'accent',
            }, className)}
            onClick={onClick}
            value={value}
            disabled={disabled}
          >
            {children}
          </button>
        }
      </>
    )
  }
}

export default Button;