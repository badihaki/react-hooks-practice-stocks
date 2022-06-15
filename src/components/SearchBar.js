import React from "react";

function SearchBar({ sortCallbackFunction, setFilterStocks }) {
  function handleFilterChange(e){
    //
    setFilterStocks(e.target.value.toLowerCase());
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={ (e)=>{ sortCallbackFunction(e.target.value)} }
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={ (e)=>{ sortCallbackFunction(e.target.value)} }
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
