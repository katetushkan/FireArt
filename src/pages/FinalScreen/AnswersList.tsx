import React from "react";
import {Question} from "../../models/Question";
import AnswerCard from "./AnswerCard";
import clsx from "clsx";

import "./AnswerList.css";

interface IProps{
    questions: Question[];
    className?: string;
}

const AnswersList = ({questions, className}: IProps) =>{

    return(
        <div className={clsx("answer-list", className)}>
            {
                questions && questions.map((question, index) =>
                    <AnswerCard key={index}
                                question={question.question}
                                user_answer={question.user_answer}
                                incorrect_answers={question.incorrect_answers}
                                className="answer-card__icon"
                                classNameWrapper="answer-list__card"
                    />
                )
            }
        </div>
    )
}

export default AnswersList;