import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import List from '../List/List'
import { filterItems, foods } from '../data';
import './FilterableList.css'

const FilterableList = () => {

  const [query, setQuery] = useState('')
  const results = filterItems(foods, query);

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  

  return (
    <section className='filterable-list-container'>
      <SearchBar 
        query={query} 
        onInputChange={handleChange}
      />
      <List items={results}/>
    </section>
  )
}

export default FilterableList