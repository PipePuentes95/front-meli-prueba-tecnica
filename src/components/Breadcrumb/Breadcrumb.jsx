import React from 'react'
import './Breadcrumb.scss'

const Breadcrumb = () => {

  return (
    <div className='breadcrumb'>
      <div className="breadcrumb-content">
        <span className='breadcrumb-item'>Electronica, Audio y Video</span>
        <span className='breadcrumb-item'>iPod</span>
        <span className='breadcrumb-item'>Reproductores</span>
        <span className='breadcrumb-item'>iPod touch</span>
        <span className='breadcrumb-item'>iPod 32 GB</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
