import React, { Component } from 'react';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = { brand: '' };
  }

  render() {

    if (this.props.color == 'dark') {
      var navClass = 'navbar navbar-inverse';
    } else {
      var navClass = 'navbar navbar-default';
    }

    return (
      <div className="container">
        <nav className={navClass}>
          <a className="navbar-brand" href="#">{this.props.brand}</a>
        </nav>
        <p>Currently each service lane can take in 5 cars</p>
        <p>After all lanes are full, the cars are queued in the Queue Column</p>
      </div>
    );
  }
}

export default Navbar;
