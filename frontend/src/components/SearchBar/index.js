import React from 'react'

const SearchBar = () => {
  return (
    <form>
      <input
        type='text'
        placeholder='Search books'
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar