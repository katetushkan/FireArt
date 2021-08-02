import React from "react";
import clsx from "clsx";

import Button from "../Button/Button";
import "./QuestionCard.css";

interface IProps {
  question: string;
  answers: string[];
  onAnswer: (value: string) => void;
  className?: string;
}

class QuestionCard extends React.Component<IProps> {
  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { onAnswer } = this.props;
    const fieldValue = event.currentTarget.value;
    onAnswer(fieldValue);
  }

  render() {
    const { answers, question, className } = this.props;
    return (
      <article className={clsx("question-card", className)}>
        <p className="question-card__trivia">{question}</p>
        {answers.map((answer) => (
          <Button
            key={answer}
            value={answer}
            className="question__button"
            onClick={this.handleClick}
            type="normal"
          >
            {answer}
          </Button>
        ))}
      </article>
    )
  }
}

export default QuestionCard;