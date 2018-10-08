import React, { Component } from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import VoteTracker from './components/counter/counter.js';
import './App.css';

class App extends Component {
  render() {
    // below is not HTML, it is jsx. Class is a reserved keyword, so instead it uses className. This is a dummy component because there is no logic, it only renders
    return (
      <React.Fragment>
        <Header></Header>
        <VoteTracker></VoteTracker>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;

