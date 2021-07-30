import React from "react";
import Button from "../Button/Button";

class QuestionCard extends React.Component<any, any>{
    onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const fieldValue = event.currentTarget.value;
        this.props.onButtonClick(fieldValue);
    }
    render() {
        return(
            <div className="question-card-wrapper">
                <p className="question__trivia">{this.props.question}</p>
                <Button value="True" className="question__button" onClick={this.onClick}>true</Button>
                <Button value="False" className="question__button" onClick={this.onClick}>false</Button>
            </div>
        )
    }
}

export default QuestionCard;