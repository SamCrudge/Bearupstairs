import React from "react";
import './footer.css'

class Footer extends React.Component {

    render() {
        return (
            <div className="Footer">
                <img src={require("../../Assets/bearupstairsfooter.jpg")} alt='Alternative logo' />
            </div>
        )
    }
}

export default Footer