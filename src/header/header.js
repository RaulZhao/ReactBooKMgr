import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    )
  }
}

export default Header;
