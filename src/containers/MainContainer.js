import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sorted: null,
    filtered: null
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(res => res.json())
      .then(stocks => this.setState({ stocks }));
  }

  addToPortfolio = stock => {
    const { portfolio } = this.state;

    if (portfolio.includes(stock)) return;

    this.setState({ portfolio: [...portfolio, stock] });
  };

  removeFromPortfolio = id => {
    console.log("here");
    const { portfolio } = this.state;

    this.setState({ portfolio: portfolio.filter(oldId => oldId !== id) });
  };

  portfolioStocks = () => {
    const { stocks, portfolio } = this.state;

    return stocks.filter(stock => portfolio.includes(stock.id));
  };

  filteredStock = () => {
    const { filtered } = this.state;
    const stocks = this.sortedStock();

    if (!filtered) return stocks;

    switch (filtered) {
      case "Tech":
        return stocks.filter(stock => stock.type === "Tech");

      case "Finance":
        return stocks.filter(stock => stock.type === "Finance");

      case "Sportswear":
        return stocks.filter(stock => stock.type === "Sportswear");

      default:
        return stocks;
    }
  };

  sortedStock = () => {
    const { sorted, stocks } = this.state;

    if (!sorted) return stocks;

    if (sorted === "alpha") {
      return stocks.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sorted === "price") {
      return stocks.sort((a, b) => a.price - b.price);
    }
  };

  setFilter = filtered => {
    this.setState({ filtered });
  };

  setSort = sorted => {
    this.setState({ sorted });
  };

  render() {
    const { stocks } = this.state;
    return (
      <div>
        <SearchBar
          setFilter={this.setFilter}
          setSort={this.setSort}
          sorted={this.state.sorted}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.filteredStock()}
              addToPortfolio={this.addToPortfolio}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.portfolioStocks()}
              removeFromPortfolio={this.removeFromPortfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
