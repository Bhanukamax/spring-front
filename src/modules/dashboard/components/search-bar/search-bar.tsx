import Icon from 'components/icon';
import React from 'react';
import './search-bar.scss';

export default function SearchBar() {
  return (
    <div className='search-bar'>
      <input
        type='text'
        className='search-bar__input'
        placeholder='Search...'
      />
      <button className='search-bar__button'>
        <Icon icon='search' className='search-bar__icon' />
      </button>
    </div>
  );
}
