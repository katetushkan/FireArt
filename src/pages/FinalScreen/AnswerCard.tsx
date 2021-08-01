import * as React from "react";
import Icon from "../../components/Icon/Icon";

import "./AnswerCard.css";
import clsx from "clsx";

interface IProps {
  question: string
  user_answer: string | null,
  incorrect_answers: string[],
  className?: string,
  classNameWrapper?: string
}

const AnswerCard = ({ question, user_answer, incorrect_answers, className, classNameWrapper }: IProps) => {
  if (incorrect_answers.includes(user_answer as string)) {
    return (
      <div className={clsx("answer-card-wrapper false", classNameWrapper)}>
        <p className="answer-card_p">{question}</p>
        <Icon name="false" className={className}/>
      </div>
    )
  } else {
    return (
      <div className={clsx("answer-card-wrapper true", classNameWrapper)}>
        <p className="answer-card_p">{question}</p>
        <Icon name="true" className={className}/>
      </div>
    )
  }

}

export default AnswerCard;