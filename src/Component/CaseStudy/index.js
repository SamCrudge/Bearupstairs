import React from "react";
import './caseStudy.css';

class CaseStudy extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.caseStudyExit = this.caseStudyExit.bind(this);
    }

    caseStudyExit() {
        const caseStudy = document.querySelector('.CaseStudy');
        document.querySelector('.CaseWindow').classList.toggle('viewCaseStudy');
        setTimeout(() => { document.querySelector('.CaseBase').classList.toggle('viewCaseStudy') }, 500);
        setTimeout(() => { caseStudy.classList.toggle('openCaseStudy') }, 1000);
    }

    render() {
        return (
            <div className="CaseStudy">
                <div className="CaseBase" onClick={this.caseStudyExit} />
                <div className="CaseWindow">
                    <div className="allCases Study0 CaseClosed">
                        CASE STUDY ONE
                    </div>
                    <div className="allCases Study1 CaseClosed">
                        CASE STUDY TWO
                    </div>
                    <div className="allCases Study2 CaseClosed">
                        CASE STUDY THREE
                    </div>
                </div>
            </div>
        )
    }
}

export default CaseStudy