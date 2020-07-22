import React from "react";

import './portfolio.css';
import './CaseStudy/caseStudy.css';

import PortfolioPage from "./CaseStudy/PortfolioPage";
import CaseStudy from "./CaseStudy";

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openId: ''
        };
        this.caseStudyPop = this.caseStudyPop.bind(this);
        this.caseStudyExit = this.caseStudyExit.bind(this);
    }
    caseStudyPop(id) {
        const caseStudy = document.querySelector('.CaseStudy');
        caseStudy.classList.toggle('CaseOpen');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 100);
        setTimeout(() => { document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy') }, 700);
        this.setState({
            openId: id
        });
    }
    caseStudyExit() {
        const caseStudy = document.querySelector('.CaseStudy');
        document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 700);
        setTimeout(() => { caseStudy.classList.toggle('CaseOpen') }, 1000);
        this.setState({
            openId: ''
        });
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
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        id={0}
                        name={"Artist gallery: bluesungfruit"}
                        image={require("../../Assets/portfolio/portfolio_bsf_1.jpg")} />
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        id={1}
                        name={"Victoria Hill Acupuncture"}
                        image={require("../../Assets/portfolio/portfolio_vha_1.jpg")} />
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        id={2}
                        name={"The Forester & Flower Pub and B&B"}
                        image={require("../../Assets/portfolio/portfolio_ff_1.jpg")} />
                </div>
                <div className="CaseStudy">
                    <div className="CaseBase" onClick={this.caseStudyExit} id={''} />
                    <div className="CaseWindow">
                        <div className="exitCaseStudy" onClick={this.caseStudyExit}>&#43;</div>
                        <CaseStudy name={this.state.openId} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio