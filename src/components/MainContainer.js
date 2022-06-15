import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const api = 'http://localhost:3001/stocks';

  const [stocks, setStocks] = useState([]);
  const [stockPortfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState('');
  const [filterType, setFilterType] = useState("tech");

  useEffect(()=>{
    fetch(api).then( (r)=> r.json()).then((data)=>{
      setStocks(data);
    })
  }, [])

  function addStockToPortfolio(stock){
    const newPortfolio = [...stockPortfolio, stock];
    const newStockList = stocks.filter((stonk)=>{
      return stock.id !== stonk.id;
    })
    setPortfolio(newPortfolio);
    setStocks(newStockList);
  }

  function removeStockFromPortfolio(stonk){
    const newPortfolio = stockPortfolio.filter( (stock)=>{
      return stock.id !== stonk.id;
    })
    const newStockList = [...stocks, stonk];
    setPortfolio(newPortfolio);
    setStocks(newStockList);
  }

  function handleSortToggle(toggleName){
    setSortType(toggleName.toLowerCase());
  }

  const stocksSortedByAlphabet = stocks.sort(function(a,b){
    const nameA= a.name;
    const nameB= b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
  const stocksSortedByPrice = stocks.sort(function(a,b){
    const priceA = a.price;
    const priceB = b.price;
    if (priceA < priceB) {
      return -1;
    }
    if (priceA > priceB) {
      return 1;
    }
    return 0;
  })

  const stockList = function(){
    if(sortType === 'alphabetically' ){
      return stocksSortedByAlphabet;
    }
    else if(sortType === 'price' ){
      return stocksSortedByPrice;
    }
    else{
      return stocks;
    }
  }

  const filteredStockList = stockList().filter( (stock)=>{
    return stock.type.toLowerCase() === filterType;
  })

  return (
    <div>
      <SearchBar sortCallbackFunction={handleSortToggle} setFilterStocks={setFilterType} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={ filteredStockList } addPortfolioFunction={addStockToPortfolio} sortAlphabet={sortType} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={stockPortfolio} removePortfolioFunction={removeStockFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
