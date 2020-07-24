import React from "react";
import './about.css'



class About extends React.Component {

    render() {
        return (
            <div className="About fullPage">
                <h1>ABOUT</h1>
                <div className="mainText">
                    <p>
                        Okay, I like a challenge.
                    </p>
                    <p>
                        And until then, I can never die? And I'm his friend Jesus.
                    </p>
                </div>
                <div className="accentTextOne">
                    <p>
                        And remember, don't do anything that affects anything,
                        unless it turns out you were supposed to,
                        in which case, for the
                        <span className="accentTextTwo">
                            <span className="redText"> love of God, </span>
                            don't <i>not</i> do it!
                        </span>
                    </p>
                    <div className="aboutPics">
                        <img src={require("../../Assets/sam.jpg")} alt="Sam" />
                        <img src={require("../../Assets/ben.jpg")} alt="Sam" />
                    </div>
                    <p>
                        Then throw her in the laundry room, which will hereafter be referred to as "the brig".
                        For example, if you killed your grandfather, you'd cease to exist!
                        Maybe I love you so much I love you no matter who you are pretending to be.
                    </p>
                </div>
            </div>
        )
    }
}

export default About