import React, { Component } from 'react';
import _ from 'lodash';
import Header from './header/header';
import Search from './content/search';
import BookList from './content/book_list';
import SearchResult from './content/search_result';
import './App.css';
import Book from './model/books';

const list = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      list
    };
  }

  componentDidMount() {
    Book.getAllBooks().then(jsonData => {
      if (!_.isEmpty(jsonData)) {
        this.setState({list: jsonData});
      }
    });
  }

  onDismiss = (id) => {
    const updateList = this.state.list.filter((item) => {
      return item.objectID !== id;
    });

    this.setState({list: updateList});
  }

  onSearchChange = (evt) => {
    this.setState({searchTerm: evt.target.value})
  }

  isSearched = (searchingName) => {
    return (iterator) => {
      return searchingName && iterator.title.toLowerCase().includes(searchingName.toLowerCase());
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BookList
          list={this.state.list}
          onDismiss={this.onDismiss}>
        </BookList>
        <Search onSearchChange={this.onSearchChange}>
          Search Book:
        </Search>
        <SearchResult
          list={this.state.list}
          searchTerm={this.state.searchTerm}
          isSearched={this.isSearched}>
        </SearchResult>

      </div>
    );
  }
}

export default App;
export { Search, BookList };
