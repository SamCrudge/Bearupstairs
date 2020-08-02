import React from "react";

class OptionSingles extends React.Component {

    render() {

        return (
            <div>
                <h3>
                    SINGLES
                </h3>
                <div className="smallText">
                    <p>
                        One image at a time.
                    </p>
                    <img src={require("../../Assets/galleryOptions/singles.jpg")} alt='Galleryfit' />
                    <p>
                        Give each image undivided attention. Click, swipe, or scroll to the next.
                    </p>
                </div>
            </div>
        )
    }
}

export default OptionSingles