import React from "react";

class OptionGalleryfit extends React.Component {

    render() {

        return (
            <div style={{cursor: "pointer"}}>
                <h3>
                    GALLERYFIT
                </h3>
                <div className="smallText">
                    <p>
                        Our favourite option.
                    </p>
                    <img src={require("../../Assets/galleryOptions/galleryfit.jpg")} alt='Galleryfit' />
                    <p>
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