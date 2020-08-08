import React from "react";
import './footer.css'

class Footer extends React.Component {

    render() {
        return (
            <div className="Footer">
                <div className="verySmallText">
                    <p>Something something, etc...</p>
                    <p>and so on</p>
                </div>
                <div>
                    <img src={require("../../Assets/bearupstairsfooter.jpg")} alt='Alternative logo' />
                </div>
                <div>
                    <p>&copy;</p>
                    <p><span className="allCaps"><span className="redText">Bear</span>Upstairs</span></p>
                    <p>2020</p>
                </div>
            </div>
        )
    }
}

export default Footer