import React from "react";
import './Socials.css'



class Socials extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.socialPop = this.socialPop.bind(this);
    }

    socialPop() {
        document.getElementById('social').classList.toggle('socialClick');
    }

    render() {
        return (
            <div id="social">
                <div id="socialButton" onClick={this.socialPop}>
                    <span>&#10010;</span>
                </div>
                <menu id="socialIcons">
                    <a href="https://github.com/bearupstairs/">
                        <img src={require("../../Assets/github.png")} className="iconOne" alt='Github logo' />
                    </a>
                    <a href="https://twitter.com/bearupstairs/">
                        <img src={require("../../Assets/twitter.png")} className="iconTwo" alt='Twitter logo' />
                    </a>
                    <a href="https://facebook.com/bearupstairs/">
                        <img src={require("../../Assets/facebook.png")} className="iconThree" alt='Facebook logo' />
                    </a>
                </menu>
            </div>
        )
    }
}

export default Socials