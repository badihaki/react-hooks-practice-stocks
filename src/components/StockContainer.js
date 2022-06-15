import React from "react";
import Stock from "./Stock";

function StockContainer( { stockList, addPortfolioFunction }) {
  
  const stockTiles = stockList.map( (stock)=> {
    return <Stock key={stock.id} stockData={stock} addPortfolioFunction={addPortfolioFunction} inPortfolio={false} />;
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stockTiles}
    </div>
  );
}

export default StockContainer;
