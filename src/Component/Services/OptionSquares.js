import React from "react";

class OptionSquares extends React.Component {

    render() {

        return (
            <div>
                <h3>
                    SQUARES
                </h3>
                <div className="smallText">
                    <p>
                        Images arranged in a grid.
                    </p>
                    <img src={require("../../Assets/galleryOptions/squares.jpg")} alt='Squares' />
                    <p>
                        Think of Instagram.
                    </p>
                </div>
            </div>
        )
    }
}

export default OptionSquares