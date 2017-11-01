import React, { Component } from 'react';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowTitle: false
    }
  }
  render() {
    return(
      <div className="search-result">
        <h4>{function(){
          if (this.state.isShowTitle) {
            return "Search Result:"
          }
        }.bind(this)()}</h4>
        {this.props.list.filter(this.props.isSearched(this.props.searchTerm)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        )}
      </div>
    )
  }
}

export default SearchResult;
