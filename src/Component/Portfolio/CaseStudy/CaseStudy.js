import React from "react";

class CaseStudy extends React.Component {

    render() {
        return (
            <div className="CaseFile">
                <div className="CaseTitle">
                    {this.props.name}
                </div>
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