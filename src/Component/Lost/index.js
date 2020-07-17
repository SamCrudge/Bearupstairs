import React from "react";
import './lost.css'
const Link = require("react-router-dom").Link;


class Lost extends React.Component {


    render() {
        return (
            <div className="Lost">
                <h1>Hi, this isn't a page we recognise. Perhaps you'd like to go home?</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Lost