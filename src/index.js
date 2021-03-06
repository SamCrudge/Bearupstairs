import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';

import Header from "./Component/Header";
import Socials from "./Component/Socials";
import Home from "./Component/Home"
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Services from "./Component/Services";
import Lost from "./Component/Lost"
import Footer from "./Component/Footer";

class Routing extends React.Component {

    constructor(props) {
        super(props);
        this.navPop = this.navPop.bind(this);
    }

    navPop() {
        const nav = document.getElementById('nav');
        nav.classList.toggle('closeNav');
        nav.classList.toggle('openNav');
    }

    render() {
        return (
            <Router>
                <div>
                    <label id='navButton' onChange={this.navPop}>
                        <input type='checkbox' id='navCheckbox' />
                        <div><img src={require("./Assets/swish/bars.png")} alt="Open menu" /></div>
                    </label>
                    <nav>
                        <ul id="nav" className='closeNav'>
                            <li onClick={this.navPop}><Link to="/"><div>HOME</div></Link></li>
                            <li onClick={this.navPop}><Link to="/services"><div>SERVICES</div></Link></li>
                            <li onClick={this.navPop}><Link to="/portfolio"><div>PORTFOLIO</div></Link></li>
                            <li onClick={this.navPop}><Link to="/about"><div>ABOUT</div></Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/services" component={ Services }/>
                        <Route exact path="/portfolio" component={ Portfolio }/>
                        <Route exact path="/about" component={ About }/>
                        <Route component={ Lost }/>
                    </Switch>
                    <Socials />
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
