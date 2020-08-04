import React from "react";

class OptionGalleryfit extends React.Component {

    render() {

        return (
            <div className="galleryOptionsContainer" style={{cursor: "pointer"}} onClick={() => {this.props.clickHandler(this.props.isOpenIndex)}}>
                <h3>
                    GALLERYFIT
                </h3>
                <div className="smallText">
                    <p>
                        Our favourite option.
                    </p>
                    <img src={require("../../../Assets/galleryOptions/galleryfit.jpg")} alt='Galleryfit' />
                    <p className="verySmallText">
                        Images fit neatly across each row, with no gaps.
                        Rows resize automatically as necessary.
                    </p>
                    <p className="accentTextTwo redText smallText">
                        <i>click for an example</i>
                    </p>
                </div>
            </div>
        )
    }
}

export default OptionGalleryfit