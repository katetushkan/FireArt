import React from "react";
import QuizScreenContent from "../components/QuizScreenContent";

class QuizScreen extends React.Component<any, any>{

    render() {
        return (
            <main className="quiz-screen">
                <QuizScreenContent/>
            </main>
        )
    }

}


export default QuizScreen;