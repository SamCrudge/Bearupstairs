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
                            We offer simple, stylish, sensible websites for individuals and small businesses.
                        </p>
                    </div>
                    <div className="accentTextOne">
                        <p>
                            We have a range of possibilities for attractive,
                            quick-loading gallery pages for artists and other creatives.
                        </p>
                        <p style={{fontSize: 0.8 + 'rem'}}>
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
                                <img src={require("../../Assets/galleryoptions/columns.jpg")} alt='Flexi columns' />
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
                                <img src={require("../../Assets/galleryoptions/galleryfit.jpg")} alt='Galleryfit' />
                                <p>
                                    Images fit neatly across each row, with no gaps.
                                    Rows resize automatically as necessary.
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
                                <img src={require("../../Assets/galleryoptions/squares.jpg")} alt='Squares' />
                                <p>
                                    Think of Instagram.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Services