import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';

import Main from './Component/Main'
import Lost from './Component/Lost'

class Routing extends React.Component {
  render() {
      return (
          <Router>
              <div>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                       </li>
                  </ul>
                  <Switch>
                            <Route exact path="/" component={ Main }/>
                            <Route component={ Lost }/>
                  </Switch>
              </div>
          </Router>
      )
  }
}

ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);

serviceWorker.unregister();
