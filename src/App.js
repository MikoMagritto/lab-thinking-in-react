import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import json from "./data.json";
import FilterableProductTable from './Components/FilterableProductTable'

function App() {
  return (
    <div className="App" >
      <FilterableProductTable products={json.data} />
    </div>
  );
}

export default App;
