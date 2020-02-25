import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  renderStocks = stocks => {
    return stocks.map(stock => (
      <Stock stock={stock} handleClick={this.props.addToPortfolio} />
    ));
  };

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks(this.props.stocks)}
      </div>
    );
  }
}

export default StockContainer;
