import * as React from "react";
import clsx from "clsx";

import Icon from "../Icon/Icon";

import "./AnswerCard.css";

interface IProps {
  question: string
  correct: boolean;
  className?: string,
}

const AnswerCard: React.FC<IProps> = ({ question, correct, className }) => {
  return (
    <div className={clsx("answer-card", {
      'answer-card--correct': correct,
      'answer-card--incorrect': !correct
    }, className)}>
      <p className="answer-card__question">{question}</p>
      <Icon
        name={correct ? 'true' : 'false'}
        className="answer-card__icon"
      />
    </div>
  )
}

export default AnswerCard;