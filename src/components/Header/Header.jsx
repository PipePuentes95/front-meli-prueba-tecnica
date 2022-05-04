import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Header.scss';
import logo from '../../assets/logo-meli.png';
import icon_search from '../../assets/icon-search.png';

const Header = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handlerInputSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handlerSearch = (e) => {
    e.preventDefault();
    return navigate(`/items?q=${ searchValue }`);
  };

  const handlerGoToHome = (e) => {
    return navigate('/');
  }

  return (
    <header className='header-wrapper'>
      <div className="container">
        <div className="header">
        
          <button className='header-btn-logo' onClick={ handlerGoToHome } data-testid="go-to-home">
            <img className='header-img' src={ logo } alt="logo mercado libre" width="53" height="36" />
          </button>
          
          <form className='header-search' onSubmit={ handlerSearch } data-testid="go-items">
            <input
              className='search-bar'
              placeholder='Nunca dejes de buscar'
              type="text"
              onChange={ handlerInputSearch }
              data-testid="search-bar" />
            <button className='search-btn' type='submit'>
              <img src={ icon_search } alt="icon search" width="18" height="18" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
