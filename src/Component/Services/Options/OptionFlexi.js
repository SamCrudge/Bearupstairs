import React from "react";

class OptionFlexi extends React.Component {

    render() {

        return (
            <div className="galleryOptionsContainer" style={{cursor: "pointer"}} onClick={() => {this.props.clickHandler(this.props.isOpenIndex)}}>
                <h3>
                    FLEXI COLUMNS
                </h3>
                <div className="smallText">
                    <p>
                        Neatly aligned columns.
                    </p>
                    <img src={require("../../../Assets/galleryOptions/columns.jpg")} alt='Flexi columns'/>
                    <p className="verySmallText">
                        Images flow down the page in a manner similar to Pinterest or Unsplash.
                    </p>
                    <p className="accentTextTwo redText smallText">
                        <i>click for an example</i>
                    </p>
                </div>
            </div>
        )
    }
}

export default OptionFlexi