import Icon from "../../components/Icon/Icon";
import TrueAnswer from "../../components/Icon/res/true-answer.svg";
import FalseAnswer from "../../components/Icon/res/false-answer.svg";

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
                <Icon name="false"/>
            </div>
        )
    }
    else {
        return(
            <div className="answer-card-wrapper true">
                <p className="answer-card_p">{question}</p>
                <Icon name="true"/>
            </div>
        )
    }

}

export default AnswerCard;