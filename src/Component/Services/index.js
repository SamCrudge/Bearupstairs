import React from "react";
import './services.css'



class Services extends React.Component {

    render() {
        return (
            <div className="Services">

                <div className="fullPage">
                    <h1>OUR SERVICES</h1>
                    <div className="mainText">
                        <p>
                            We have a range of possibilities for attractive, quick-loading gallery pages.
                        </p>
                    </div>
                    <div className="accentTextOne">
                        <p>
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
                            </div>
                            <img src={require("../../Assets/galleryoptions/columns.jpg")} alt='Flexi columns' />
                        </div>
                        <div>
                            <h3>
                                GALLERYFIT
                            </h3>
                            <div className="accentTextThree">
                                <p>
                                    Our favourite option.
                                </p>
                            </div>
                            <img src={require("../../Assets/galleryoptions/galleryfit.jpg")} alt='Galleryfit' />
                        </div>
                        <div>
                            <h3>
                                SQUARES
                            </h3>
                            <div className="accentTextThree">
                                <p>
                                    Think of Instagram.
                                </p>
                            </div>
                            <img src={require("../../Assets/galleryoptions/squares.jpg")} alt='Squares' />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Services