import React from "react";

import './Examples/examples.css';
import './services.css';
import '../buttons.css';

import OptionFlexi from "./Options/OptionFlexi";
import OptionGalleryfit from "./Options/OptionGalleryfit";
import OptionSingles from "./Options/OptionSingles";
import OptionSquares from "./Options/OptionSquares";
import Galleryfit from "./Examples/Galleryfit";
import Flexi from "./Examples/Flexi";

class Services extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scrollPosition: 0,
            isOpenIndex: 0
        };

        this.examplePop = this.examplePop.bind(this);
        this.exampleExit = this.exampleExit.bind(this);

    }

    examplePop = (isOpenIndex) => {
        this.setState({isOpenIndex: isOpenIndex});
        this.setState({scrollPosition: window.pageYOffset});
        document.querySelector('.exampleContainer').classList.add('portOpen');
        setTimeout(() => { document.querySelector('.exampleBase').classList.add('portView') }, 100);
        setTimeout(() => { document.querySelector('.exampleWindow').classList.add('portView') }, 400);
        setTimeout(() => { document.querySelector('.portButtons').classList.add('portOpen') }, 500);
        window.scrollTo({ top: 0 });
    }

    exampleExit = () => {
        this.setState({isOpenIndex: 0});
        document.querySelector('.portButtons').classList.remove('portOpen');
        document.querySelector('.exampleWindow').classList.remove('portView');
        setTimeout(() => { document.querySelector('.exampleBase').classList.remove('portView') }, 100);
        setTimeout(() => { document.querySelector('.exampleContainer').classList.remove('portOpen') }, 400);
        window.scrollTo({ top: this.state.scrollPosition });
    }

    render() {
        return (
            <div className="Services">

                <div className="fullPage">
                    <h1>OUR SERVICES</h1>
                    <div className="mainText">
                        <p>
                            We offer simple, stylish, sensible websites for individuals and small businesses.
                        </p>
                    </div>
                    <div className="accentTextOne">
                        <p>
                            We also have a range of possibilities for attractive,
                            quick-loading gallery pages for visual artists.
                        </p>
                        <p className="smallText">
                            If you want to include an online shop, you can also choose between a couple of options,
                            including an integrated gallery-shop to make your customers' experience simpler.
                        </p>
                    </div>
                </div>

                <div className="packages">
                    <h2 className="paintShadowText paintShadowTextNarrow">
                        PACKAGES
                    </h2>
                    <div className="packagesBlock">
                        <div className="packagesPage">
                            <h4 className="packagesTitle">FULL</h4>
                            <div>
                                <div>Web address & storage</div>
                                <div>Website design</div>
                                <div>Any gallery option</div>
                                <div>Fully integrated shop</div>
                                <div>Logo & social media design</div>
                                <div>6 months free support</div>
                            </div>
                        </div>
                        <div className="packagesPage">
                            <h4 className="packagesTitle">MEDIUM</h4>
                            <div>
                                <div>Web address & storage</div>
                                <div>Website design</div>
                                <div>Basic responsive gallery</div>
                                <div>3 months free support</div>
                            </div>
                        </div>
                        <div className="packagesPage">
                            <h4 className="packagesTitle">BASIC</h4>
                            <div>
                                <div>Web address & storage</div>
                                <div>Website design</div>
                                <div>1 month free support</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="invert">
                    <h2 className="shadowText">GALLERY FORMATS</h2>
                    <div className="smallText">
                        <p>
                            There are many ways to organise and style an online gallery.
                        </p>
                        <p>
                            Here are a few of our favourites:
                        </p>
                    </div>
                    <div className="galleryOptions" style={{marginTop: 4 + 'vh'}}>
                        <OptionFlexi isOpenIndex={1} clickHandler={this.examplePop} />
                        <OptionGalleryfit isOpenIndex={2} clickHandler={this.examplePop} />
                    </div>
                    <div className="galleryOptions" style={{marginBottom: 10 + 'vh'}}>
                        <OptionSingles />
                        <OptionSquares />
                    </div>
                    <div className="mainText">
                        <p>
                            To find out more...
                            get in touch!
                        </p>
                        <p className="redText shadowText">
                            hello@bearupstairs.com
                        </p>
                        <p>
                            07753 700 197
                        </p>
                    </div>
                </div>
                <div className="portExit portButtons" onClick={this.exampleExit}>
                    <div><img src={require("../../Assets/swish/exit.png")} alt="button" /></div>
                </div>
                <div className="exampleContainer">
                    <div className="exampleBase" onClick={this.exampleExit} />
                    <div className="exampleWindow">

                        <Flexi isOpen={this.state.isOpenIndex===1} />
                        <Galleryfit isOpen={this.state.isOpenIndex===2} />

                    </div>
                </div>
            </div>
        )
    }
}

export default Services