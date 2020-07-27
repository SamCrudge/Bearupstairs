import React from "react";

import './Galleryfit/galleryfit.css';
import './services.css';
import '../buttons.css';

import Galleryfit from "./Galleryfit";

class Services extends React.Component {

    constructor(props) {
        super(props);

        this.galleryfitPop = this.galleryfitPop.bind(this);
        this.galleryfitExit = this.galleryfitExit.bind(this);

    }

    galleryfitPop = () => {
        document.querySelector('.galleryfitContainer').classList.toggle('portOpen');
        setTimeout(() => { document.querySelector('.galleryfitBase').classList.toggle('portView') }, 100);
        setTimeout(() => { document.querySelector('.galleryfitWindow').classList.toggle('portView') }, 400);
        setTimeout(() => { document.querySelector('.portButtons').classList.toggle('portOpen') }, 500);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
    }

    galleryfitExit = () => {
        document.querySelector('.portButtons').classList.toggle('portOpen');
        document.querySelector('.galleryfitWindow').classList.toggle('portView');
        setTimeout(() => { document.querySelector('.galleryfitBase').classList.toggle('portView') }, 100);
        setTimeout(() => { document.querySelector('.galleryfitContainer').classList.toggle('portOpen') }, 400);
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

                <div className="invert">
                    <h2 className="redText">GALLERY FORMATS</h2>
                    <div className="mainText">
                        <p>
                            There are many ways to organise and style an online gallery.
                        </p>
                        <p>
                            Here are three of our favourites:
                        </p>
                    </div>

                    <div className="galleryOptions">
                        <div>
                            <h3>
                                FLEXI COLUMNS
                            </h3>
                            <div className="accentTextThree">
                                <p>
                                    Neatly aligned columns.
                                </p>
                                <img src={require("../../Assets/galleryOptions/columns.jpg")} alt='Flexi columns' />
                                <p>
                                    Images flow down the page in a manner similar to Pinterest or Unsplash.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>
                                GALLERYFIT
                            </h3>
                            <div className="accentTextThree">
                                <p>
                                    Our favourite option.
                                </p>
                                <img src={require("../../Assets/galleryOptions/galleryfit.jpg")} alt='Galleryfit' />
                                <p>
                                    Images fit neatly across each row, with no gaps.
                                    Rows resize automatically as necessary.
                                </p>
                                <p className="accentTextTwo redText" style={{cursor: "pointer"}} onClick={this.galleryfitPop}>
                                    <i>click here for an example</i>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>
                                SQUARES
                            </h3>
                            <div className="accentTextThree">
                                <p>
                                    Images arranged in a grid.
                                </p>
                                <img src={require("../../Assets/galleryOptions/squares.jpg")} alt='Squares' />
                                <p>
                                    Think of Instagram.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portExit portButtons" onClick={this.galleryfitExit}>
                    <div><img src={require("../../Assets/swish/exit.png")} alt="button" /></div>
                </div>
                <div className="galleryfitContainer">
                    <div className="galleryfitBase" onClick={this.galleryfitExit} />
                    <div className="galleryfitWindow">
                        <Galleryfit />
                    </div>
                </div>

            </div>
        )
    }
}

export default Services