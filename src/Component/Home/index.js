import React from "react";
import './home.css'



class Home extends React.Component {


    render() {
        return (
            <div className="Home">
                <div className="mainText">
                    <p>
                        Hi! We’re
                        <span className="allCaps">
                            <span className="redText"> Bear</span>Upstairs
                        </span>, your friendly web team.
                    </p>
                    <p>
                        We build attractive, functional websites for creatives.
                    </p>
                </div>
                <div className="accentTextOne">
                    <p>We know how important it is for you</p>
                    <p>to share your
                        <span className="accentTextTwo">
                            <span className="redText"> beautiful</span>
                            <i> content</i>
                        </span>
                    </p>
                    <p>in a beautiful space,</p>
                    <p>to be able to easily</p>
                    <p>sell your work,</p>
                    <p className="mainText redText">simply.</p>
                </div>
                <div className="mainText">
                    <p>LET US HELP!</p>
                </div>
            </div>
        )
    }
}

export default Home