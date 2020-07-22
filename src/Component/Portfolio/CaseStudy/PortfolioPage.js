import React from "react";

class PortfolioPage extends React.Component {
    render () {
        return (
            <div className="portfolioPage" onClick={() => {this.props.clickHandler(this.props.id)}}>
                <div className="title">&#10010; {this.props.name}</div>
                <img src={this.props.image} alt='Desktop example' />
            </div>
        );
    }
}
export default PortfolioPage;