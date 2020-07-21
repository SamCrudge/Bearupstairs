import React from "react";
import CaseStudyOne from './CaseStudyOne';
import CaseStudyTwo from './CaseStudyTwo';
import CaseStudyThree from './CaseStudyThree';

class CaseStudy extends React.Component {

    constructor(props) {
        super(props);
        this.caseStudyExit = this.caseStudyExit.bind(this);
    }
    caseStudyExit() {
        const caseStudy = document.querySelector('.CaseStudy');
        document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 700);
        setTimeout(() => { caseStudy.classList.toggle('openCaseStudy') }, 1000);
    }

    render() {

        return (
            <div className="CaseStudy">
                <div className="CaseBase" onClick={this.caseStudyExit} />
                <div className="CaseWindow">
                    <div className="exitCaseStudy" onClick={this.caseStudyExit}>&#43;</div>
                    <CaseStudyOne />
                    <CaseStudyTwo />
                    <CaseStudyThree />
                </div>
            </div>
        )
    }
}

export default CaseStudy