import React from 'react';
import { HashRouter as Router} from 'react-router-dom'
import BaseRouter from "./routing/routes";


class App extends React.Component<any, any> {
  render(): JSX.Element {
    return(
        <Router>
            <BaseRouter/>
        </Router>
    )
  }
}


export default App;
