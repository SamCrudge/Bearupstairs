import React from "react";

class CaseStudy extends React.Component {

    render() {
        return (
            <div className="CaseFile">
                <h4 className="CaseTitle">
                    {this.props.name}
                </h4>
                <div className="CaseDesc">
                    {this.props.desc.split('\n').map(function(item, i) {
                        return (
                            <p key={i}>
                                {item}
                            </p>
                        )
                    })}
                    <div className="CaseAddress">
                        <a href={this.props.address} target="_blank" rel="noopener noreferrer">{this.props.address}</a>
                    </div>
                </div>
                <div className="CaseDeskImg">
                    <h4 className="mobDesk">Desktop example</h4>
                    <img src={this.props.deskImage} alt="Case study desktop example" />
                </div>
                <div className="CaseMobImg">
                    <h4 className="mobDesk">Mobile example</h4>
                    <img src={this.props.mobImage} alt="Case study mobile example" />
                </div>
            </div>
        )
    }
}

export default CaseStudy