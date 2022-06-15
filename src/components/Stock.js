import React from "react";

function Stock( {stockData, addPortfolioFunction, removeFromPortfolioFunction, inPortfolio} ) {
  function handleClick(){
    if(inPortfolio){
      removeFromPortfolioFunction(stockData);
    }
    else{
      addPortfolioFunction(stockData);
    }
  }
  return (
    <div>
      <div className="card" onClick={handleClick} >
        <div className="card-body">
          <h5 className="card-title">{stockData.name}</h5>
          <p className="card-text">{stockData.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
