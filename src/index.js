import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';

// importing components so the Router div can pull the needed files.
import Home from './Component/Home'
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Lost from './Component/Lost'
import Footer from "./Component/Footer";

class Routing extends React.Component {
    render() {
      return (
          <Router>
              <div>
                  <ul className='Navigation'>
                      {/*This creates the Nav component you will style in css.*/}
                      <li>
                          <Link to="/">HOME</Link>
                          <Link to="/about">ABOUT</Link>
                          <Link to="/portfolio">PORTFOLIO</Link>
                          <Link to="/contact">CONTACT</Link>
                      </li>
                  </ul>
                  <Switch>
                      {/*This will determine which components to use when the Links are press in the browser*/}
                            <Route exact path="/" component={ Home }/>
                            <Route exact path="/about" component={ About }/>
                            <Route exact path="/portfolio" component={ Portfolio }/>
                            <Route exact path="/contact" component={ Contact }/>
                            <Route component={ Lost }/>
                  </Switch>
              </div>
          </Router>
      )
  }
}
/*This <> </> is a fragment useful for holding multiple components for the Render that can only have a single object with the Document.getElement....*/
/* https://reactjs.org/docs/fragments.html */
ReactDOM.render(
    <>
        <Routing />,
        <Footer />,
    </>,
  document.getElementById('root')
);

serviceWorker.unregister();
