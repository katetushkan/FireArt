import * as React from "react";
import clsx from "clsx";
import { ReactComponent as CoinIcon } from "./res/input-icon.svg";
import { ReactComponent as UserIcon } from "./res/user-icon.svg";
import { ReactComponent as GambleIcon } from "./res/selector-icon.svg";
import { ReactComponent as TrueIcon } from "./res/true-answer.svg";
import { ReactComponent as FalseIcon } from "./res/false-answer.svg";
import { ReactComponent as CancelIcon } from "./res/cancel.svg";
import { ReactComponent as StarIcon } from "./res/star-icon.svg";

import './Icon.css';

const icons = {
  coin: CoinIcon,
  user: UserIcon,
  true: TrueIcon,
  false: FalseIcon,
  gamble: GambleIcon,
  cancel: CancelIcon,
  star: StarIcon
};

interface IProps {
  className?: string;
  name: keyof typeof icons;
}

const Icon: React.FC<IProps> = ({ className, name }) => {
  const Icon = icons[name];

  return (
    <i className={clsx('icon', className)}>
      <Icon className='icon__svg'/>
    </i>
  )
}

export default Icon;
