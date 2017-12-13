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
      collapse: false,
      words : ['cool', 'dev', 'nerd', 'coder', 'front'],
      addingWord : true,
    }

    this.showNavBar = this.showNavBar.bind(this)
    this.showResponsive = this.showResponsive.bind(this)
    this.navbarClick = this.navbarClick.bind(this)
    this.animationWord = this.animationWord.bind(this)
    this.redirectClick = this.redirectClick.bind(this)
  }

  showNavBar () {
    if(document.documentElement.scrollTop > 300) {
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

  animationWord() {

    let wordWrapper = document.getElementById('word'),
    wordWrapperContent = wordWrapper.innerHTML,
    counter = 0;

    setInterval( () => {

      if(wordWrapperContent.length > 0 && !this.state.addingWord) {
        wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
        wordWrapperContent = wordWrapper.innerHTML;
      } else {
        this.setState({
          addingWord : true
        })
      }

      if(this.state.addingWord) {
        if( wordWrapperContent.length < this.state.words[counter].length ) {
          wordWrapper.innerHTML = this.state.words[counter].slice(0, wordWrapperContent.length + 1);
          wordWrapperContent = wordWrapper.innerHTML;
        } else {
          if( counter < this.state.words.length) {
            counter ++
          }
          this.setState({
            addingWord :  false
          })
        }
      }

      if( counter === this.state.words.length) {
        counter = 0;
      }

    },300)

  }

  redirectClick (e, id) {
    let el = document.getElementById(id)
    if(document.documentElement.scrollTop === 0) {
      alert(el)
    }
  }

  componentDidMount () {
    window.onscroll = () => this.showNavBar()
    window.onresize = () => this.showResponsive()
    this.animationWord()
  }

  render() {
    return (
      <div className="App">
        <Header 
          navbar={this.state.navbar}
          click={(e) => this.navbarClick(e)}
          showBar={this.state.collapse}
          redirectClick = {this.redirectClick}/>
        <Bio/>
        <Works/>
        <Footer/>
      </div>
    );
  }
}

export default Radium(App)
