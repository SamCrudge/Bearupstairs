import React from "react";

import './portfolio.css';
import './CaseStudy/caseStudy.css';

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            caseOneStatus: 'CaseClosed',
            caseTwoStatus: 'CaseClosed',
            caseThreeStatus: 'CaseClosed'
        };
        this.changeCaseTwoStatus = this.changeCaseTwoStatus.bind(this);
        this.caseStudyPop = this.caseStudyPop.bind(this);
        this.caseStudyOnePop = this.caseStudyOnePop.bind(this);
        this.caseStudyTwoPop = this.caseStudyTwoPop.bind(this);
        this.caseStudyThreePop = this.caseStudyThreePop.bind(this);
        this.caseStudyExit = this.caseStudyExit.bind(this);
    }
    changeCaseOneStatus(status) {
        this.setState({
            caseOneStatus: status
        });
    }
    changeCaseTwoStatus(status) {
        this.setState({
            caseTwoStatus: status
        });
    }
    changeCaseThreeStatus(status) {
        this.setState({
            caseThreeStatus: status
        });
    }
    caseStudyPop() {
        const caseStudy = document.querySelector('.CaseStudy');
        caseStudy.classList.toggle('CaseOpen');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 100);
        setTimeout(() => { document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy') }, 700);
    }
    caseStudyOnePop() {
        this.caseStudyPop();
        this.changeCaseOneStatus('CaseOpen')
    }
    caseStudyTwoPop() {
        this.caseStudyPop();
        this.changeCaseTwoStatus('CaseOpen')
    }
    caseStudyThreePop() {
        this.caseStudyPop();
        this.changeCaseThreeStatus('CaseOpen')
    }
    caseStudyExit() {
        const caseStudy = document.querySelector('.CaseStudy');
        document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 700);
        setTimeout(() => { caseStudy.classList.toggle('CaseOpen') }, 1000);
        this.changeCaseOneStatus('CaseClosed');
        this.changeCaseTwoStatus('CaseClosed');
        this.changeCaseThreeStatus('CaseClosed');
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
                    <div className="portfolioPage" onClick={this.caseStudyOnePop}>
                        <div className="title">&#10010; Artist gallery: bluesungfruit</div>
                        <img src={require("../../Assets/portfolio/portfolio_bsf_1.jpg")} alt='Desktop example' />
                    </div>
                    <div className="portfolioPage" onClick={this.caseStudyTwoPop}>
                        <div className="title">&#10010; Victoria Hill Acupuncture</div>
                        <img src={require("../../Assets/portfolio/portfolio_vha_1.jpg")} alt='Desktop example' />
                    </div>
                    <div className="portfolioPage" onClick={this.caseStudyThreePop}>
                        <div className="title">&#10010; The Forester &amp; Flower Pub and B&amp;B</div>
                        <img src={require("../../Assets/portfolio/portfolio_ff_1.jpg")} alt='Desktop example' />
                    </div>
                </div>
                <div className="CaseStudy">
                    <div className="CaseBase" onClick={this.caseStudyExit} />
                    <div className="CaseWindow">
                        <div className="exitCaseStudy" onClick={this.caseStudyExit}>&#43;</div>
                        <div className={this.state.caseOneStatus}>
                            1
                        </div>
                        <div className={this.state.caseTwoStatus}>
                            2
                        </div>
                        <div className={this.state.caseThreeStatus}>
                            3
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio