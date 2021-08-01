import * as React from 'react';
import clsx from "clsx";

import "./Score.css";

interface IProps {
  score: number,
  count: number,
  className?: string,
  classNameStrong?: string
}

const Score: React.FC<IProps> = ({ score, count, className , classNameStrong}) => {

  const format_score = score.toString(10).padStart(2, '0');
  const format_count = count.toString(10).padStart(2, '0');

  return (
    <p className={clsx("score", className)}>
      <strong className={clsx("score__strong", classNameStrong)}>{format_score}</strong>/{format_count}
    </p>
  )
}

export default Score;