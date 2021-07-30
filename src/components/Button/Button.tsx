import * as React from "react";
import clsx from "clsx";

import './Button.css';

interface IProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    autoFocus?: boolean;
    value: string;
    disabled?: boolean;
    type?: 'normal' | 'accent';
}

class Button extends React.Component<IProps>{

    render() {
        const { onClick, className, children, autoFocus, value, disabled, type } = this.props;

        return(
            <button
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
        )
    }
}

export default Button;