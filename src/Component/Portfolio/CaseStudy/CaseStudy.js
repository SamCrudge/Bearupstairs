import React from "react";

class CaseStudy extends React.Component {

    render() {
        return (
            <div className="CaseFile">
                <div className="CaseTitle">
                    {this.props.name}
                </div>
                <div className="CaseDesc">
                    {this.props.desc}
                </div>
                <div className="CaseImg">
                    <img src={this.props.image} />
                </div>
            </div>
        )
    }
}

export default CaseStudy