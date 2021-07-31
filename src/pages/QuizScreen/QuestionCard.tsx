import React from "react";
import Button from "../../components/Button/Button";

interface IProps {
  question: string;
  answers: string[];
  onAnswer: (value: string) => void;
}

class QuestionCard extends React.Component<IProps> {
  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { onAnswer } = this.props;
    const fieldValue = event.currentTarget.value;
    onAnswer(fieldValue);
  }

  render() {
    const { answers, question } = this.props;
    return (
      <article className="question-card">
        <p className="question-card__trivia">{question}</p>
        {answers.map((answer, index) => (
          <Button
            key={answer}
            autoFocus={index === 0}
            value={answer}
            className="question__button"
            onClick={this.handleClick}
          >
            {answer}
          </Button>
        ))}
      </article>
    )
  }
}

export default QuestionCard;