
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className={'landing-page'}>
        <div className="background-image"></div>
      </div>
      <div className={'product-list-container'}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;



