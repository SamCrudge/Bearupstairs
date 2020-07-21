import React from "react";

class CaseStudyThree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            caseThreeStatus: "CaseClosed"
        };
    }

    render() {
        return (
            <div className={this.props.caseThreeStatus}>
                ca va
            </div>
        )
    }
}

export default CaseStudyThree