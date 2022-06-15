import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { portfolioList, removePortfolioFunction } ) {
  const portfolioCards = portfolioList.map( (stock)=>{
    return <Stock key={stock.id} stockData={stock} removeFromPortfolioFunction={removePortfolioFunction} inPortfolio={true} />;
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioCards
      }
    </div>
  );
}

export default PortfolioContainer;
