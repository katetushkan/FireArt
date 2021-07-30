import Icon from "../Form/Icon";
import TrueAnswer from "../../assets/icons/true-answer.svg";
import FalseAnswer from "../../assets/icons/false-answer.svg";

interface IProps {
    question: string
    user_answer: string | null,
    incorrect_answers: string[]
}

const AnswerCard = ({question, user_answer, incorrect_answers }: IProps) => {
    if (incorrect_answers.includes(user_answer as string)){
        return(
            <div className="answer-card-wrapper false">
                <p className="answer-card_p">{question}</p>
                <Icon icon={FalseAnswer}/>
            </div>
        )
    }
    else {
        return(
            <div className="answer-card-wrapper true">
                <p className="answer-card_p">{question}</p>
                <Icon icon={TrueAnswer}/>
            </div>
        )
    }

}

export default AnswerCard;