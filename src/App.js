import React, { Component } from 'react'
import Header from './components/header/header'
import Bio from './components/Bio/Bio'
import Works from './components/works/works'
import Footer from './components/footer/footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      navbar : true
    }

    this.showNavBar = this.showNavBar.bind(this)
    this.showResponsive = this.showResponsive.bind(this)
  }

  showNavBar () {
    if(document.documentElement.scrollTop > 300) {
      console.log('hola')
    }
  }

  showResponsive () {
    console.log('res')
  }

  componentDidMount () {
    window.onscroll = () => this.showNavBar()
    window.addEventListener('resize', this.showResponsive)
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Bio/>
        <Works/>
        <Footer/>
      </div>
    );
  }
}

export default App
