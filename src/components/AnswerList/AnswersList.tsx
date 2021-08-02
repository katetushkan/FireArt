import * as React from "react";
import clsx from "clsx";

import { Question } from "../../models/Question";
import AnswerCard from "../AnswerCard/AnswerCard";

import "./AnswerList.css";

interface IProps {
  questions: Question[];
  className?: string;
}

const AnswersList = ({ questions, className }: IProps) => {
  return (
    <div className={clsx("answer-list", className)}>
      {questions.map((question) =>
        <AnswerCard
          key={question.question}
          question={question.question}
          correct={question.user_answer === question.correct_answer}
        />
      )}
    </div>
  )
}

export default AnswersList;