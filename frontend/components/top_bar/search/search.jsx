import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return ( 
      <div className='search'>
      <input 
      className='search-input'
      placeholder='Search...'
      />
    </div>
    )
  }
}

export default Search;