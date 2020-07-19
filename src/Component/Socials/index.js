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
                    <img src={require("../../Assets/hearticon.png")} alt='Social media' />
                </div>
                <menu id="socialIcons">
                    <a href="https://instagram.com/bear.upstairs" target="_blank" rel="noopener noreferrer" >
                        <img src={require("../../Assets/instagram.png")} className="iconOne" alt='Github logo' />
                    </a>
                    <a href="https://twitter.com/bearupstairs" target="_blank" rel="noopener noreferrer" >
                        <img src={require("../../Assets/twitter.png")} className="iconTwo" alt='Twitter logo' />
                    </a>
                    <a href="https://facebook.com/bearupstairs" target="_blank" rel="noopener noreferrer" >
                        <img src={require("../../Assets/facebook.png")} className="iconThree" alt='Facebook logo' />
                    </a>
                </menu>
            </div>
        )
    }
}

export default Socials