import * as React from 'react';
import clsx from "clsx";
import Icon from "../Icon/Icon";

import './Star.css';

interface IProps {
  className?: string;
  id: string;
  filled?: boolean;
}

const Star: React.FC<IProps> = ({ id, className, filled }) => {

  return (
    <div className={clsx('star', { 'star--filled': filled }, className)}>
      <input className="star__input" id={id} type="radio" checked={filled} readOnly/>
      <label className="star__label" htmlFor={id}>
        <Icon name='star'/>
      </label>
    </div>
  )
}

export default Star;