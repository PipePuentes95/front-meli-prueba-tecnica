import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

import './SearchResult.scss';

const SearchResult = () => {

  const [searchParams] = useSearchParams();

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [withoutResults, setWithoutResults] = useState(false);

  const getSearchResult = async (params) => {
    setItems([]);
    setWithoutResults(false);

    const { data } = await axios.get(`http://localhost:4001/api/items?q=${ params }`);

    const categories = data.categories.filter((_, index) => index < 5);

    if(data.length === 0) return setWithoutResults(true);
    setWithoutResults(false);
    setItems(data.items);
    setCategories(categories);
  }

  useEffect(()=> {
    const params = searchParams.get('q');
    getSearchResult(params);
  }, [searchParams]);

  return (
    <div className="search-result">
      { (items.length !== 0 && !withoutResults) && (
        <div className='container'>
          <Breadcrumb categories={ categories } />
            <div className='products'>
              <div className="products__wrapper">
                { items.map((item) => (
                  <ProductCard
                    key={ item.id }
                    id={ item.id }
                    title={ item.title }
                    price={ item.price }
                    picture={ item.picture }
                    free_shipping={ item.free_shipping }
                    state_name={ item.state_name } />
                )) }
              </div>
            </div>
        </div>
      )}

      { (items.length === 0 && !withoutResults) &&(
        <div className='container'>
          <Loader />
        </div>
      )}

      { (items.length === 0 && withoutResults) &&(
        <div className='container'>
          <div className="without-results">
            <h3>No se encontraron resultados de busqueda</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
