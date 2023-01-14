import React from 'react'
import './styles.css'

const SearchBar = () => {
  return (
    <section className='searchWrapper' >
        <form className='searchBar'>
            <input type='text' placeholder='Type here to filter...'/>
        </form>
    </section>
    
  )
}

export default SearchBar