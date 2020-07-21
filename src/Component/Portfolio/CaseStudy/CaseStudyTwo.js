import React from "react";

class CaseStudyTwo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            caseTwoStatus: "CaseClosed"
        };
    }

    render() {
        return (
            <div className={this.props.caseTwoStatus}>
                sup
            </div>
        )
    }
}

export default CaseStudyTwo