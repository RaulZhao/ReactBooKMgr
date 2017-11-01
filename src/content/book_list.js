import React, { Component } from 'react';

class BookList extends Component{
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div className="book-list-container">
        <h3>Books List:</h3>
        {this.props.list.map((item) => {
          return (
            <div key={item.objectID} className="book-row">
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.props.onDismiss(item.objectID)}
                  type="button">
                  Dismiss
                </button>
              </span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BookList;
