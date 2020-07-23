import React from "react";

import './portfolio.css';
import './CaseStudy/caseStudy.css';

import PortfolioPage from "./PortfolioPage";
import CaseStudy from "./CaseStudy/CaseStudy";

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openId: '',
            caseName: '',
            caseDeskImage: '',
            caseMobImage: '',
            caseDesc: ''
        };
        this.caseStudyPop = this.caseStudyPop.bind(this);
        this.caseStudyExit = this.caseStudyExit.bind(this);
    }
    caseStudyPop = (id, name, deskImage, mobImage, desc) => {
        this.setState({
            openId: id,
            caseName: name,
            caseDeskImage: deskImage,
            caseMobImage: mobImage,
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
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 300);
        setTimeout(() => { caseStudy.classList.toggle('CaseOpen') }, 400);
        setTimeout(() => { this.setState({ openId: '', caseName: '', caseDeskImage: '', caseMobImage: '', caseDesc: '' }); }, 500);
    }
    render() {

        return (
            <div className="Portfolio">
                <h1>PORTFOLIO</h1>
                <div className="portfolioBlock">
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        id={0}
                        name={"Artist gallery: bluesungfruit"}
                        deskImage={require("../../Assets/portfolio/portfolio_bsf_1.jpg")}
                        mobImage={require("../../Assets/portfolio/portfolio_bsf_2.jpg")}
                        desc={"In Sicily, women are more dangerous than shotguns. Vito, how do you like my little angel? Isn't she beautiful? If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. I am sorry. What happened to your father was business. I have much respect for your father. But your father, his thinking is old-fashioned. You must understand why I had to do that. Now let's work through where we go from here."} />
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        id={1}
                        name={"Victoria Hill Acupuncture"}
                        deskImage={require("../../Assets/portfolio/portfolio_vha_1.jpg")}
                        mobImage={require("../../Assets/portfolio/portfolio_vha_2.jpg")}
                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                    <PortfolioPage
                        clickHandler={this.caseStudyPop}
                        id={2}
                        name={"The Forester & Flower"}
                        deskImage={require("../../Assets/portfolio/portfolio_ff_1.jpg")}
                        mobImage={require("../../Assets/portfolio/portfolio_ff_2.jpg")}
                        desc={"Now, it is a fact, gentlemen, as you may see for yourselves, that my hair is of a very full and rich tint, so that it seemed to me that if there was to be any competition in the matter I stood as good a chance as any man that I had ever met. Vincent Spaulding seemed to know so much about it that I thought he might prove useful, so I just ordered him to put up the shutters for the day and to come right away with me. He was very willing to have a holiday, so we shut the business up and started off for the address that was given us in the advertisement."} />
                </div>
                <div className="CaseStudy">
                    <div className="CaseBase" onClick={this.caseStudyExit} />
                    <div className="CaseWindow">
                        <div className="exitCaseStudy" onClick={this.caseStudyExit}>&#10006;</div>
                        <CaseStudy id={this.state.openId}
                                   name={this.state.caseName}
                                   deskImage={this.state.caseDeskImage}
                                   mobImage={this.state.caseMobImage}
                                   desc={this.state.caseDesc} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio