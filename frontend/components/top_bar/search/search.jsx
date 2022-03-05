import React from 'react';
import { MdSearch } from 'react-icons/md';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return ( 
      <div className='search'>
        <MdSearch className='search-icons' size='1.3em' />
        <input 
        className='search-input'
        placeholder='Search ...'
        />
    </div>
    )
  }
}

export default Search;