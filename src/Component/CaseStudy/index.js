import React from "react";
import './caseStudy.css';

class CaseStudy extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.caseStudyExit = this.caseStudyExit.bind(this);
    }

    caseStudyExit() {
        const   caseStudy = document.querySelector('.CaseStudy');
            caseStudy.classList.toggle('openCaseStudy');
    }

    render() {
        return (
            <div className="CaseStudy">
                <div className="CaseBase" onClick={this.caseStudyExit} />
                <div className="CaseWindow">
                    CASE STUDY
                </div>
            </div>
        )
    }
}

export default CaseStudy