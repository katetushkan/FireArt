import { Route } from "react-router-dom"
import WelcomePage from "./containers/WelcomePage";

const BaseRouter = () => (
    <>
        <Route exact path='/' component={WelcomePage}/>
    </>
);

export default BaseRouter;