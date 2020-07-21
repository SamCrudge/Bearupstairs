import React from "react";

class CaseStudyOne extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            caseStatus: "CaseClosed"
        };
    }

    render() {
        return (
            <div className={this.state.caseStatus}>
                hi
            </div>
        )
    }
}

export default CaseStudyOne