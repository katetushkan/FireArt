import { Route } from "react-router-dom"
import WelcomeScreen from "./containers/WelcomeScreen";
import QuizScreen from "./containers/QuizScreen";

const BaseRouter = () => (
    <>
        <Route exact path='/' component={WelcomeScreen}/>
        <Route exact path="/quiz" component={QuizScreen}/>
    </>
);

export default BaseRouter;