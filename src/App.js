import React, { Component } from 'react'
import Header from './components/header/header'
import Bio from './components/Bio/Bio'
import Works from './components/works/works'
import Footer from './components/footer/footer'
import Radium from 'radium'

class App extends Component {
  constructor() {
    super()

    this.state = {
      navbar : false,
      showNav : false,
      collapse: false
    }

    this.showNavBar = this.showNavBar.bind(this)
    this.showResponsive = this.showResponsive.bind(this)
    this.navbarClick = this.navbarClick.bind(this)
  }

  showNavBar () {
    if(document.documentElement.scrollTop > 300) {
      console.log('hola')
    }
  }

  showResponsive () {
    if(document.body.clientWidth <= 900) {
      this.setState({
        navbar : true
      })
    }else if(document.body.clientWidth >= 900) {
      this.setState({
        navbar : false
      })
    }
  }

  navbarClick (e) {
    this.setState({
      collapse : !this.state.collapse
    })
    console.log(this.state.collapse)

  }

  componentDidMount () {
    window.onscroll = () => this.showNavBar()
    window.onresize = () => this.showResponsive()
  }

  render() {
    return (
      <div className="App">
        <Header 
          navbar={this.state.navbar}
          click={(e) => this.navbarClick(e)}
          showBar={this.state.collapse}/>
        <Bio/>
        <Works/>
        <Footer/>
      </div>
    );
  }
}

export default Radium(App)
