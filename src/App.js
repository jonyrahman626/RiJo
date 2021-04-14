import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header  from './Components/Header/Header';
import Banner  from './Components/Banner/Banner';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    )
  }
}
