import React from "react";

class CaseStudyThree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            caseStatus: "CaseClosed"
        };
    }

    render() {
        return (
            <div className={this.state.caseStatus}>
                ca va
            </div>
        )
    }
}

export default CaseStudyThree