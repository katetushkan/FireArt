import React from "react";
import QuizScreenContent from "../../containers/QuizScreenContent/QuizScreenContent";

import "./QuizScreen.css";

class QuizScreen extends React.Component<any, any> {

  render() {
    return (
      <main className="quiz-screen">
        <QuizScreenContent className="quiz-screen__content"/>
      </main>
    )
  }
}


export default QuizScreen;