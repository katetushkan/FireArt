import { Route } from "react-router-dom"
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import QuizScreen from "../components/QuizScreen/QuizScreen";
import FinalScreen from "../components/FinalScreen/FinalScreen";

const BaseRouter = () => (
    <>
        <Route exact path='/' component={WelcomeScreen}/>
        <Route exact path="/quiz" component={QuizScreen}/>
        <Route exact path="/final" component={FinalScreen}/>
    </>
);

export default BaseRouter;