import React from "react";
import './portfolio.css'



class Portfolio extends React.Component {

    render() {
        return (
            <div className="Portfolio">
                <h1>PORTFOLIO</h1>
                <div className="portfolioBlock">
                    <div className="portfolioPage">
                        <img src={require("../../Assets/portfolio_bsf_1.jpg")} alt='Desktop example' />
                    </div>
                    <div className="portfolioPage">
                        <img src={require("../../Assets/portfolio_vha_1.jpg")} alt='Desktop example' />
                    </div>
                    <div className="portfolioPage">
                        <img src={require("../../Assets/portfolio_ff_1.jpg")} alt='Desktop example' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio