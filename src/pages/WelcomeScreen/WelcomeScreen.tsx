import React from "react";
import WelcomeScreenConfigForm from "../../containers/WelcomScreenConfigForm";

class WelcomeScreen extends React.Component {

    render() {
        return (
            <main className="welcome-screen">
                <h1 className="welcome-screen__hero">Welcome to the</h1>
                <img alt="trivia" className="welcome-screen__logo"/>
                <WelcomeScreenConfigForm/>
            </main>
        )
    }
}


export default WelcomeScreen;