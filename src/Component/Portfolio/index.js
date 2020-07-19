import React from "react";
import './portfolio.css'



class Portfolio extends React.Component {

    render() {
        return (
            <div className="Portfolio">
                <h1>PORTFOLIO</h1>
                <div className="portfolioBlock">
                    <div className="portfolioPage">
                        <div className="title">&#10010; Artist gallery: bluesungfruit</div>
                        <img src={require("../../Assets/portfolio/portfolio_bsf_1.jpg")} alt='Desktop example' />
                    </div>
                    <div className="portfolioPage">
                        <div className="title">&#10010; Victoria Hill Acupuncture</div>
                        <img src={require("../../Assets/portfolio/portfolio_vha_1.jpg")} alt='Desktop example' />
                    </div>
                    <div className="portfolioPage">
                        <div className="title">&#10010; The Forester &amp; Flower Pub and B&amp;B</div>
                        <img src={require("../../Assets/portfolio/portfolio_ff_1.jpg")} alt='Desktop example' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio