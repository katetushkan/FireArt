import {Redirect} from "react-router";
import { Route } from "react-router-dom"

import WelcomeScreen from "../pages/WelcomeScreen/WelcomeScreen";
import QuizScreen from "../pages/QuizScreen/QuizScreen";
import FinalScreen from "../containers/FinalScreen/FinalScreen";
import {Routes} from "./constnts";

const BaseRouter = () => (
    <>
        <Route exact path={Routes.WELCOME_SCREEN} component={WelcomeScreen}/>
        <Route exact path={Routes.QUIZ_SCREEN} component={QuizScreen}/>
        <Route exact path={Routes.FINAL_SCREEN} component={FinalScreen}/>
        <Redirect to={Routes.WELCOME_SCREEN} />
    </>
);

export default BaseRouter;