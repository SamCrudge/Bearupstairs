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
    desc: "bluesungfruit is a passion project of Ben, one of our team.\n" +
        "Wanting to showcase his personal paintings online, he started developing a unique gallery format, " +
        "called Galleryfit, which we have now adapted for other artists.",
    address: "https://bluesungfruit.com"
},{
    id: 1,
    name: "Victoria Hill Acupuncture",
    deskImage: require("../../Assets/portfolio/portfolio_vha_1.jpg"),
    mobImage: require("../../Assets/portfolio/portfolio_vha_2.jpg"),
    desc: "Victoria wanted a no-frills website to offer her acupuncture services.\n" +
        "Information on the site flows down in easily-digested boxes.\n" +
        "The site and logo follow a simple colour scheme suggested by Victoria herself.",
    address: "https://www.victoriahillacupuncture.co.uk"
},{
    id: 2,
    name: "The Forester & Flower",
    deskImage: require("../../Assets/portfolio/portfolio_ff_1.jpg"),
    mobImage: require("../../Assets/portfolio/portfolio_ff_2.jpg"),
    desc: "Working with a fantastic photographer to capture the atmosphere inside, " +
        "we designed the website to reflect the place itself: " +
        "traditional penumbral British pub decorated with bright splashes of colour.",
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
        document.querySelector('.CaseStudyContainer').classList.toggle('caseOpen');
        setTimeout(() => { document.querySelector('.CaseStudyBase').classList.toggle('viewCaseStudy') }, 100);
        setTimeout(() => { document.querySelector('.CaseStudyWindow').classList.toggle('viewCaseStudy') }, 700);
        setTimeout(() => { document.querySelectorAll('.caseStudyButtons').forEach(e => e.classList.toggle('caseOpen')) }, 750);
        setTimeout(() => {
            if (window.matchMedia("(max-width: 1224px)").matches) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 800);
        this.y = id;
    }

    caseStudyExit = () => {
        document.querySelectorAll('.caseStudyButtons').forEach(e => e.classList.toggle('caseOpen'));
        document.querySelector('.CaseStudyWindow').classList.toggle('viewCaseStudy');
        setTimeout(() => { document.querySelector('.CaseStudyBase').classList.toggle('viewCaseStudy') }, 300);
        setTimeout(() => { document.querySelector('.CaseStudyContainer').classList.toggle('caseOpen') }, 400);
        setTimeout(() => { this.setState({ id: '', name: '', deskImage: '', mobImage: '', desc: '', address: '' }); }, 500);
    }

    nextCaseStudy = () => {
        document.querySelector('.CaseStudyWindow').classList.toggle('prevNextFade');
        setTimeout(() => {
            if (this.y < this.x) {
                this.y+=1;
                this.setState({...pages[this.y]});
            } else if (this.y >= this.x) {
                this.y = 0;
                this.setState({...pages[this.y]});
            }
        }, 500);
        setTimeout(() => { document.querySelector('.CaseStudyWindow').classList.toggle('prevNextFade') }, 600);
        setTimeout(() => {
            if (window.matchMedia("(max-width: 1224px)").matches) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 400);
    }

    prevCaseStudy = () => {
        document.querySelector('.CaseStudyWindow').classList.toggle('prevNextFade');
        setTimeout(() => {
            if (this.y > 0) {
                this.y-=1;
                this.setState({...pages[this.y]});
            } else if (this.y === 0) {
                this.y = pages.length - 1;
                this.setState({...pages[this.y]});
            }
        }, 500);
        setTimeout(() => { document.querySelector('.CaseStudyWindow').classList.toggle('prevNextFade') }, 600);
        setTimeout(() => {
            if (window.matchMedia("(max-width: 1224px)").matches) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 400);
    }

    render() {

        return (
            <div className="Portfolio">
                <h1>PORTFOLIO</h1>
                <div className="portfolioBlock">
                    {pages.map((item, i) => <PortfolioPage key={i} clickHandler={this.caseStudyPop} {...pages[i]} /> )}
                </div>
                <div className="prevCase casePrevNext caseStudyButtons" onClick={this.prevCaseStudy}>
                    <div><img src={require("../../Assets/swish/prev.png")} alt="button" /></div>
                </div>
                <div className="nextCase casePrevNext caseStudyButtons" onClick={this.nextCaseStudy}>
                    <div><img src={require("../../Assets/swish/next.png")} alt="button" /></div>
                </div>
                <div className="exitCaseStudy caseStudyButtons" onClick={this.caseStudyExit}>
                    <div><img src={require("../../Assets/swish/exit.png")} alt="button" /></div>
                </div>
                <div className="CaseStudyContainer">
                    <div className="CaseStudyBase" onClick={this.caseStudyExit} />
                    <div className="CaseStudyWindow">
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