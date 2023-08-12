import React from 'react'
import './SearchBar.css'

const SearchBar = ({onInputChange, query}) => {
  return (
    <div className='search-bar-container'>
      <label className='search-bar-label'>
        Search:
        <input 
          type="text"
          value={query}
          onChange={onInputChange}
          className='search-bar-input'
        />
      </label>
    </div>
  )
}

export default SearchBar