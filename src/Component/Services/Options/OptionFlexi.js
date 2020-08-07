import React from "react";

class OptionFlexi extends React.Component {

    render() {

        return (
            <div className="galleryOptionsContainer" style={{cursor: "pointer"}} onClick={() => {this.props.clickHandler(this.props.isOpenIndex)}}>
                <h3 className="shadowText">
                    FLEXI COLUMNS
                </h3>
                <div className="accentTextOne smallText">
                    <p>
                        Neatly aligned columns.
                    </p>
                    <img src={require("../../../Assets/galleryOptions/columns.jpg")} alt='Flexi columns'/>
                    <p className="verySmallText">
                        Images flow down the page in a manner similar to Pinterest or Unsplash.
                    </p>
                    <p className="accentTextTwo redText smallText shadowText">
                        <i>click for an example</i>
                    </p>
                </div>
            </div>
        )
    }
}

export default OptionFlexi