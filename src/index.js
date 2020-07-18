import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';

// importing components so the Router div can pull the needed files.
import Header from "./Component/Header";
import Home from './Component/Home'
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Lost from './Component/Lost'
import Footer from "./Component/Footer";


class Routing extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.navPop = this.navPop.bind(this);
        this.socialPop = this.socialPop.bind(this);
    }

    navPop() {
        const nav = document.getElementById('nav');
        nav.classList.toggle('closeNav');
        nav.classList.toggle('openNav');
    }

    socialPop() {
        document.getElementById('social').classList.toggle('socialClick');
    }

    render() {

      return (
          <Router>
                <div>
                    <label id='navButton' onChange={ this.navPop }>
                        <input type='checkbox' id='navCheckbox' />
                        <span>
                            <div></div><div></div><div></div>
                        </span>
                    </label>
                    <ul id='nav' className='closeNav'>
                        <li onClick={this.navPop}><Link to="/">HOME</Link></li>
                        <li onClick={this.navPop}><Link to="/portfolio">PORTFOLIO</Link></li>
                        <li onClick={this.navPop}><Link to="/about">ABOUT</Link></li>
                        <li onClick={this.navPop}><Link to="/contact">CONTACT</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/about" component={ About }/>
                        <Route exact path="/portfolio" component={ Portfolio }/>
                        <Route exact path="/contact" component={ Contact }/>
                        <Route component={ Lost }/>
                    </Switch>
                    <div id="social">
                        <div id="socialButton" onClick={this.socialPop}>
                                <img src={require("./Assets/hearticon.png")} alt='Social media' />
                        </div>
                        <menu id="socialIcons">
                            <a href="https://github.com/bearupstairs/">
                                <img src={require("./Assets/github.png")} className="iconOne" alt='Github logo' />
                            </a>
                            <a href="https://twitter.com/bearupstairs/">
                                <img src={require("./Assets/twitter.png")} className="iconTwo" alt='Twitter logo' />
                            </a>
                            <a href="https://facebook.com/bearupstairs/">
                                <img src={require("./Assets/facebook.png")} className="iconThree" alt='Facebook logo' />
                            </a>
                        </menu>
                    </div>
                </div>
          </Router>
      )

    }

}

ReactDOM.render(
    <>
        <Header />
        <Routing />
        <Footer />
    </>,
  document.getElementById('root')
);

serviceWorker.unregister();