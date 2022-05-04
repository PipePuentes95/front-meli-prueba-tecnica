import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CurrentProduct from '../CurrentProduct/CurrentProduct';
import Loader from '../Loader/Loader';

import './ProductDetail.scss'

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProduct = async (id) => {
    const { data } = await axios.get(`http://localhost:4001/api/items/${id}`);
    setProduct(data.item);
  }

  useEffect(()=> {
    getProduct(id);
  }, [id]);

  if(!product) {
    return <Loader />
  }

  return (
    <div className="product-detail">
      <div className='container'>
        <CurrentProduct 
          picture={ product?.picture }
          condition={ product?.condition }
          sold_quantity={ product?.sold_quantity }
          title={ product?.title }
          price={ product?.price }
          description={ product?.description } />
      </div>
    </div>
  );
};

export default ProductDetail;
