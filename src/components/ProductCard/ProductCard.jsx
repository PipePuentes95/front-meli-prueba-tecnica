import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ProductCard.scss';
import iconFreeShipping from '../../assets/icon-free-shipping.png';

const ProductCard = ({
  id,
  picture,
  price,
  free_shipping,
  state_name,
  title,
}) => {

  const navigate = useNavigate();

  const handlerGoToProductDetail = () => {
    navigate(`/items/${ id }`);
  }

  const formatAmount = (value) => {
    let format = Math.trunc(value);
    format = format.toString();
    return format.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');;
  }

  const formatDecimals = (value) => {
   return value.toFixed(2).replace('0.', '');
  }

  return (
    <div className='product-card' onClick={ handlerGoToProductDetail }>
      <div className="pc-img">
        <div className="pc-img__wrapper">
          <img src={ picture } alt="img test" width="180" height="180" />
        </div>
      </div>
      <div className="pc-content">
        <div className="pc-content-header">
          <div className="pc-price">
            <p className="price">
              $ { formatAmount(price.amount)  }
              { price.decimals !== 0 &&  <span className='price__decimals'>{ formatDecimals(price.decimals) }</span> }
            </p>
            { free_shipping && 
              <img className='free-shipping' src={ iconFreeShipping } alt="icon free shipping" width="18" height="18" /> 
            }
            
          </div>
          <div className="pc-location">
            <span className='location'>{ state_name }</span>
          </div>
        </div>
        <div className="pc-content-body">
          <p className='pc-title'>{ title }</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
