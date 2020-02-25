import React from "react";

const Stock = ({ stock: { id, name, ticker, price }, handleClick }) => (
  <div>
    <div className="card" onClick={() => handleClick(id)}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{`${ticker}: ${price}`}</p>
      </div>
    </div>
  </div>
);

export default Stock;
