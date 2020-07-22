import React from "react";

import './portfolio.css';
import './CaseStudy/caseStudy.css';

import PortfolioPage from "./CaseStudy/PortfolioPage";
import CaseStudy from "./CaseStudy/CaseStudy";

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openId: '',
            caseName: '',
            caseImage: '',
            caseDesc: ''
        };
        this.caseStudyPop = this.caseStudyPop.bind(this);
        this.caseStudyExit = this.caseStudyExit.bind(this);
    }
    caseStudyPop = (id, name, image, desc) => {
        this.setState({
            openId: id,
            caseName: name,
            caseImage: image,
            caseDesc: desc
        });
        const caseStudy = document.querySelector('.CaseStudy');
        caseStudy.classList.toggle('CaseOpen');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 100);
        setTimeout(() => { document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy') }, 700);

    }
    caseStudyExit = () => {
        const caseStudy = document.querySelector('.CaseStudy');
        document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 700);
        setTimeout(() => { caseStudy.classList.toggle('CaseOpen') }, 1000);
        setTimeout(() => { this.setState({ openId: '', caseName: '', caseImage: '', caseDesc: '' }); }, 1100);
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
                        image={require("../../Assets/portfolio/portfolio_bsf_1.jpg")}
                        desc={"Description of this."} />
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        id={1}
                        name={"Victoria Hill Acupuncture"}
                        image={require("../../Assets/portfolio/portfolio_vha_1.jpg")}
                        desc={"Description of this."} />
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        id={2}
                        name={"The Forester & Flower Pub and B&B"}
                        image={require("../../Assets/portfolio/portfolio_ff_1.jpg")}
                        desc={"Description of this."} />
                </div>
                <div className="CaseStudy">
                    <div className="CaseBase" onClick={this.caseStudyExit} />
                    <div className="CaseWindow">
                        <div className="exitCaseStudy" onClick={this.caseStudyExit}>&#43;</div>
                        <CaseStudy id={this.state.openId}
                                   name={this.state.caseName}
                                   image={this.state.caseImage}
                                   desc={this.state.caseDesc} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio