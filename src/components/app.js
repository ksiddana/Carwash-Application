import React from 'react';
import { Component } from 'react';
import Navbar from './navbar.js';
import CarList from './carList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCars: [],
      carWash: [],
      smogCheck: [],
      repair: [],
      chosen: undefined,
    };

    this.addCar = this.addCar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addCar(e, value) {
    e.preventDefault();
    var lengthCarWash = this.state.carWash.length;
    var lengthSmogCheck = this.state.smogCheck.length;
    var lengthRepair = this.state.repair.length;

    if (value === 'Car Wash' && this.state.carWash.length < 5) {
      this.setState({ carWash: this.state.carWash.concat([value]) });
    }

    if (value === 'Smog Check' && this.state.smogCheck.length < 5) {
      this.setState({ smogCheck: this.state.smogCheck.concat([value]) });

    }

    if (value === 'Repair' && this.state.repair.length < 5) {
      this.setState({ repair: this.state.repair.concat([value]) });

    }

    if (lengthCarWash >= 5 && lengthSmogCheck >= 5 && lengthRepair >= 5) {
      this.setState({ totalCars: this.state.totalCars.concat([1]) });
    }

  }

  handleChange(e, value) {
    e.preventDefault();
    this.setState({ chosen: value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="main-content">

        <Navbar brand='Shiny Car Wash Services'/>

        <form className="interface" onSubmit={e => this.addCar(e, this.state.chosen)}>
          <input type='radio' checked={this.state.chosen === 'Car Wash'} onChange={e => this.handleChange(e, 'Car Wash')} value='Car Wash'/> Car Wash
          <input type="radio" checked={this.state.chosen === 'Smog Check'} onChange={e => this.handleChange(e, 'Smog Check')} value='Smog Check'/> Smog Check
          <input type="radio" checked={this.state.chosen === 'Repair'} onChange={e => this.handleChange(e, 'Repair')} value='Repair'/> Repair
          <input className="btn btn-primary" type="submit" value='New Car' />
        </form>

        <div className="total">
            <p>Total Cars in Queue: {this.state.totalCars.length}</p>
        </div>

        <div className="col-xs-3">
          <h5>Car Wash</h5>
          <CarList cars={this.state.carWash} />
        </div>

        <div className="col-xs-3">
          <h5>Smog Check</h5>
          <CarList cars={this.state.smogCheck} />
        </div>

        <div className="col-xs-3">
          <h5>Repair</h5>
          <CarList cars={this.state.repair} />
        </div>

        <div className="col-xs-3">
          <h5>Queue</h5>
          <CarList cars={this.state.totalCars} />
        </div>

      </div>
    );
  }
}

export default App;
