import React from "react";
import WelcomeScreenConfigForm from "../components/WelcomScreenConfigForm";

class WelcomeScreen extends React.Component<any, any>{

    render() {
        return (
            <main className="welcome-screen">
                <h1 className="welcome-screen_h1">Welcome to the</h1>
                <img alt="trivia" className="welcome-screen_logo"/>
                <WelcomeScreenConfigForm/>
            </main>
        )
    }

}


export default WelcomeScreen;