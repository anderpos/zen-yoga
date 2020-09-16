import React from 'react';
import { SearchForm } from './SearchBar';

const SearchBar = () => {
  return (
    <SearchForm>
      <div className="inputForm">
        <input type="text" name="search" placeholder="Encontre o que você procura"/>
        <img alt="Search icon" src={`${process.env.PUBLIC_URL}/img/search.png`}/>
      </div>
    </SearchForm>
  );
}

export default SearchBar;