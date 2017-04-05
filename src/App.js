import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Main />
      <Footer />
      </div>
    );
  }
}

export default App;
