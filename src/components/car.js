import React, { Component } from 'react';

class Car extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="car">
        <p>Car {this.props.index}</p>
      </div>
    );
  }
}

export default Car;
