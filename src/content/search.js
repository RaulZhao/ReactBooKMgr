import React, { Component } from 'react';

class Search extends Component {
  render() {
    return(
      <div className="search-input">
        <span>
          {this.props.children}
        </span>
        <input
          type="text"
          onChange={this.props.onSearchChange}
        />
      </div>
    )
  }
}

export default Search;
