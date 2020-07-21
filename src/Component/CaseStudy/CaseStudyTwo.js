import React from "react";

class CaseStudyTwo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            caseStatus: "CaseClosed"
        };
    }

    render() {
        return (
            <div className={this.state.caseStatus}>
                sup
            </div>
        )
    }
}

export default CaseStudyTwo