import React from 'react'
import './Breadcrumb.scss'

const Breadcrumb = ({ categories = [] }) => {

  return (
    <div className='breadcrumb'>
      <div className="breadcrumb-content">
        { categories.map((category) => (
          <span className='breadcrumb-item' key={ category }>{ category }</span>
        )) }
      </div>
    </div>
  );
};

export default Breadcrumb;
