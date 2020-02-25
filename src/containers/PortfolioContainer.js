import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  renderStocks = stocks => {
    return stocks.map(stock => (
      <Stock stock={stock} handleClick={this.props.removeFromPortfolio} />
    ));
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderStocks(this.props.stocks)}
      </div>
    );
  }
}

export default PortfolioContainer;
