import React from "react";
import './portfolio.css';

import CaseStudy from "../CaseStudy";

class Portfolio extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.caseStudyPop = this.caseStudyPop.bind(this);
    }

    caseStudyPop() {
        const   caseStudy = document.querySelector('.CaseStudy');
            caseStudy.classList.toggle('openCaseStudy');
    }

    render() {
        return (
            <div className="Portfolio">
                <div className="portfolioDeco">
                    <div className="portfolioLine" />
                    <h1>PORTFOLIO</h1>
                    <div className="portfolioLine" />
                </div>
                <div className="portfolioBlock">
                    <div className="portfolioPage" onClick={this.caseStudyPop}>
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
                <CaseStudy />
            </div>
        )
    }
}

export default Portfolio