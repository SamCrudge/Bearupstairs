import React from "react";

class CaseStudyOne extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            caseOneStatus: "CaseClosed"
        };
    }

    render() {
        return (
            <div className={this.props.caseOneStatus}>
                hi
            </div>
        )
    }
}

export default CaseStudyOne