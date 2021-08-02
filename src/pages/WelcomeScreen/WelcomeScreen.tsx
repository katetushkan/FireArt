import * as React from "react";

import TriviaLogo from "./res/trivia-logo.png";
import WelcomeScreenConfigForm from "../../containers/WelcomScreenConfigForm/WelcomScreenConfigForm";
import "./WelcomeScreen.css"

class WelcomeScreen extends React.Component {

  render() {
    return (
      <main className="welcome-screen">
        <h1 className="welcome-screen__hero">Welcome to the <span className="visually-hidden">Trivia</span></h1>
        <img alt="Trivia logo" className="welcome-screen__logo" src={TriviaLogo}/>
        <WelcomeScreenConfigForm className="welcome-screen__form"/>
      </main>
    )
  }
}


export default WelcomeScreen;