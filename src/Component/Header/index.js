import React from "react";
import './header.css'

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <img src={require("../../Assets/bearupstairs.jpg")} alt='Logo' />
            </div>
        )
    }
}

export default Header