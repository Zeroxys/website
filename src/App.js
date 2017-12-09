import React, { Component } from 'react'
import Header from './components/header/header'
import Bio from './components/Bio/Bio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Bio/>
      </div>
    );
  }
}

export default App
