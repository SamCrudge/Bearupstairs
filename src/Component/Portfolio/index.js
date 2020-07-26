import React from "react";

import './portfolio.css';
import './CaseStudy/caseStudy.css';

import PortfolioPage from "./PortfolioPage";
import CaseStudy from "./CaseStudy/CaseStudy";

const pages = [{
    id: 0,
    name: "Artist gallery: bluesungfruit",
    deskImage: require("../../Assets/portfolio/portfolio_bsf_1.jpg"),
    mobImage: require("../../Assets/portfolio/portfolio_bsf_2.jpg"),
    desc: "bluesungfruit is a passion project of Benjamin Hill, one of our team.\n" +
        "Wanting to showcase his personal paintings online, he started developing a unique gallery viewer, " +
        "called Galleryfit, which we have now adapted for other artists.",
    address: "https://bluesungfruit.com"
},{
    id: 1,
    name: "Victoria Hill Acupuncture",
    deskImage: require("../../Assets/portfolio/portfolio_vha_1.jpg"),
    mobImage: require("../../Assets/portfolio/portfolio_vha_2.jpg"),
    desc: "In Sicily, women are more dangerous than shotguns. Vito, how do you like my little angel? Isn't she beautiful? If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. I am sorry. What happened to your father was business. I have much respect for your father. But your father, his thinking is old-fashioned. You must understand why I had to do that. Now let's work through where we go from here.",
    address: "https://www.victoriahillacupuncture.co.uk"
},{
    id: 2,
    name: "The Forester & Flower",
    deskImage: require("../../Assets/portfolio/portfolio_ff_1.jpg"),
    mobImage: require("../../Assets/portfolio/portfolio_ff_2.jpg"),
    desc: "Now, it is a fact, gentlemen, as you may see for yourselves, that my hair is of a very full and rich tint, so that it seemed to me that if there was to be any competition in the matter I stood as good a chance as any man that I had ever met. Vincent Spaulding seemed to know so much about it that I thought he might prove useful, so I just ordered him to put up the shutters for the day and to come right away with me. He was very willing to have a holiday, so we shut the business up and started off for the address that was given us in the advertisement.",
    address: "https://www.foresterandflower.com"
}];

class Portfolio extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            deskImage: '',
            mobImage: '',
            desc: '',
            address: ''
        };

        this.x = pages.length - 1;
        this.y = this.state.id;
        this.caseStudyPop = this.caseStudyPop.bind(this);
        this.caseStudyExit = this.caseStudyExit.bind(this);
        this.nextCaseStudy = this.nextCaseStudy.bind(this);
        this.prevCaseStudy = this.prevCaseStudy.bind(this);

    }

    caseStudyPop = (id, name, deskImage, mobImage, desc, address) => {
        this.setState({ id: id, name: name, deskImage: deskImage, mobImage: mobImage, desc: desc, address: address });
        document.querySelector('.CaseStudy').classList.toggle('caseOpen');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 100);
        setTimeout(() => { document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy') }, 700);
        setTimeout(() => { document.querySelectorAll('.caseStudyButtons').forEach(e => e.classList.toggle('caseClosed')) }, 750);
        setTimeout(() => {
            if (window.matchMedia("(max-width: 1224px)").matches) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }, 800);
        this.y = id;
    }

    caseStudyExit = () => {
        document.querySelectorAll('.caseStudyButtons').forEach(e => e.classList.toggle('caseClosed'));
        document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 300);
        setTimeout(() => { document.querySelector('.CaseStudy').classList.toggle('caseOpen') }, 400);
        setTimeout(() => { this.setState({ id: '', name: '', deskImage: '', mobImage: '', desc: '', address: '' }); }, 500);
    }

    nextCaseStudy = () => {
        document.querySelector('.CaseWindow').classList.toggle('prevNextFade');
        setTimeout(() => {
            if (this.y < this.x) {
                this.y+=1;
                this.setState({...pages[this.y]});
            } else if (this.y >= this.x) {
                this.y = 0;
                this.setState({...pages[this.y]});
            }
        }, 500);
        setTimeout(() => { document.querySelector('.CaseWindow').classList.toggle('prevNextFade') }, 600);
        setTimeout(() => {
            if (window.matchMedia("(max-width: 1224px)").matches) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }, 400);
    }

    prevCaseStudy = () => {
        document.querySelector('.CaseWindow').classList.toggle('prevNextFade');
        setTimeout(() => {
            if (this.y > 0) {
                this.y-=1;
                this.setState({...pages[this.y]});
            } else if (this.y === 0) {
                this.y = pages.length - 1;
                this.setState({...pages[this.y]});
            }
        }, 500);
        setTimeout(() => { document.querySelector('.CaseWindow').classList.toggle('prevNextFade') }, 600);
        setTimeout(() => {
            if (window.matchMedia("(max-width: 1224px)").matches) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }, 400);
    }

    render() {

        return (
            <div className="Portfolio">
                <h1>PORTFOLIO</h1>
                <div className="portfolioBlock">
                    {pages.map((item, i) => <PortfolioPage clickHandler={this.caseStudyPop} {...pages[i]} /> )}
                </div>
                <div className="prevCase casePrevNext caseStudyButtons caseClosed" onClick={this.prevCaseStudy}>
                    <div><img src={require("../../Assets/swish/prev.png")} alt="button" /></div>
                </div>
                <div className="nextCase casePrevNext caseStudyButtons caseClosed" onClick={this.nextCaseStudy}>
                    <div><img src={require("../../Assets/swish/next.png")} alt="button" /></div>
                </div>
                <div className="exitCaseStudy caseStudyButtons caseClosed" onClick={this.caseStudyExit}>
                    <div><img src={require("../../Assets/swish/exit.png")} alt="button" /></div>
                </div>
                <div className="CaseStudy">
                    <div className="CaseBase" onClick={this.caseStudyExit} />
                    <div className="CaseWindow">
                        <CaseStudy id={this.state.id}
                                   name={this.state.name}
                                   deskImage={this.state.deskImage}
                                   mobImage={this.state.mobImage}
                                   desc={this.state.desc}
                                   address={this.state.address}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio