import React from "react";

class CaseStudy extends React.Component {

    componentDidUpdate(prevProps, prevState,snapshot) {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="CaseFile">
                <div className="CaseTitle">
                    {this.props.name}
                </div>
                <div className="CaseDesc">
                    {this.props.desc}
                </div>
                <div className="CaseDeskImg">
                    <div className="mobDesk">Desktop example</div>
                    <img src={this.props.deskImage} alt="Case study desktop example" />
                </div>
                <div className="CaseMobImg">
                    <div className="mobDesk">Mobile example</div>
                    <img src={this.props.mobImage} alt="Case study mobile example" />
                </div>
            </div>
        )
    }
}

export default CaseStudy