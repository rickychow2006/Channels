import React from 'react';
import { MdSearch } from 'react-icons/md';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      showSearch: 'search-li-noshow'
    };
    this.handleFocuse = this.handleFocuse.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }
  handleFocuse(event) {
    event.preventDefault();
    if (this.state.showSearch === 'search-li-noshow'){
      this.setState({showSearch:'search-li'})}
  }
  
  handleClose(event) {
    event.preventDefault();
    if (this.state.showSearch === 'search-li'){
        this.setState({showSearch:'search-li-noshow'})
      }
  }

  render () {

    return ( 
      <div className='search' onFocus={this.handleFocuse} onBlur={this.handleClose}>
        <MdSearch className='search-icons' size='1.3em' />
        <input 
        className='search-input'
        placeholder='Search ...'
        />
        <ul className={this.state.showSearch} >"hi"</ul>
    </div>
    )
  }
}

export default Search;