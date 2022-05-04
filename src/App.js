import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.scss';

import Header from './components/Header/Header';
import SearchBox from "./components/SearchBox/Searchbox";
import SearchResult from "./components/SearchResult/SearchResult";
import ProductDetail from "./components/ProductDetail/ProductDetail"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/items" element={<SearchResult />} />
        <Route path="/items/:id" element={<ProductDetail />} />
      </Routes>

    </div>
  );
}

export default App;
