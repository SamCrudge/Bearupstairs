import React from "react";

class PortfolioPage extends React.Component {

    render () {
        return (
            <div className="portfolioPage"
                 onClick={() => {
                    this.props.clickHandler(
                        this.props.id,
                        this.props.name,
                        this.props.deskImage,
                        this.props.mobImage,
                        this.props.desc,
                        this.props.address
                )}} >
                <h4 className="portfolioTitle">{this.props.name}</h4>
                <img src={this.props.deskImage} alt='Desktop example' />
            </div>
        );
    }
}

export default PortfolioPage;