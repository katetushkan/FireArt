import React from "react";
import {Question} from "../../models/Question";
import AnswerCard from "./AnswerCard";


interface IProps{
    questions: Question[]
}

const AnswersList = ({questions}: IProps) =>{

    return(
        <div className="rating-wrapper">
            {
                questions && questions.map((question, index) =>
                    <AnswerCard question={question.question} user_answer={question.user_answer} incorrect_answers={question.incorrect_answers}/>
                )
            }
        </div>
    )
}

export default AnswersList;