import React from 'react';

import './CurrentProduct.scss'

const CurrentProduct = ({
  picture,
  condition,
  sold_quantity,
  title,
  price,
  description,
}) => {

  const formatAmount = (value) => {
    let format = Math.trunc(value);
    format = format.toString();
    return format.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  const formatDecimals = (value) => {
    return value.toFixed(2).replace('0.', '');
  }

  return (
    <div className="current-product">
      <div className="cp-content">
        <div className="cp-img__wrapper">
          <img src={ picture } alt="img product" width="800" height="800" />
        </div>
        <div className="cp-summary">
          <div className="cp-condition-and-sold">
            <span>{ condition }</span> -  { sold_quantity > 0 && <span>{ sold_quantity } vendidos</span> } 
          </div>
          <h3 className='cp-product-name'>{ title }</h3>
          <p className='cp-price'>
            <span className='cp-price__amount'>$ { formatAmount(price?.amount) }</span>
            { price?.decimals !== 0 && <span className='cp-price__decimals'>{ formatDecimals(price?.decimals) }</span> }
          </p>
          <button className='btn-buy'>Comprar</button>
        </div>
      </div>

      <div className="cp-description">
        <h4 className='cp-description__title'>Descripción del producto</h4>
        <p className='cp-description__content'>{ description }</p>
      </div>
    </div>
  );
};

export default CurrentProduct;
