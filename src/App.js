import React, { Component } from 'react'
import Header from './components/header/header'
import Bio from './components/Bio/Bio'
import Works from './components/works/works'
import Tools from './components/tools/tools'
import Footer from './components/footer/footer'

class App extends Component {
  constructor() {
    super()

    this.state = {
      navbar : false,
      showNav : false,
      slide: false,
      animation: true,
      words : ['', 'frontend', 'dev', 'nerd', 'coder', 'js lover'],
      addingWord : false,
      className : '',
      fade : false,
      tools : false
    }

    this.scrollNavBar = this.scrollNavBar.bind(this)
    this.showResponsive = this.showResponsive.bind(this)
    this.navbarClick = this.navbarClick.bind(this)
    this.animationWord = this.animationWord.bind(this)
    this.redirectClick = this.redirectClick.bind(this)
  }

  scrollNavBar (id) {
    let el = document.getElementById(id)
    let elementTop = el.offsetTop
    let documentTop = document.documentElement.scrollTop

    if (documentTop >= elementTop) {
      this.setState({
        fade : true
      })
    } else if(documentTop < elementTop){
      this.setState({
        fade: false
      })
    }

    console.log(this.state.fade)

  }
 
  // function media query Show the navbar responsive
  showResponsive () {
    let width = document.body.clientWidth

    if(width > 900) {
      this.setState({
        navbar: false,
        animation: !this.state.animation
      })
    }else {
      this.setState({
        navbar: true
      })
    }

  }

  // show the navbar responsive transition
  navbarClick (e) {
    this.setState({
      slide : true,
      animation : !this.state.animation
    })
  }


  // Show the word animation
  animationWord(id) {

    let wordWrapper = document.getElementById(id)
    let wordWrapperContent = wordWrapper.innerHTML
    let counter = 0

    setInterval(() => {

      if(wordWrapperContent.length > 0 && !this.state.addingWord) {
        wordWrapper.innerHTML = wordWrapperContent.slice(0, -1)
        wordWrapperContent = wordWrapper.innerHTML
      }else {
        this.setState({
          addingWord : true
        })
      }

      if(this.state.addingWord) {
        if(wordWrapperContent.length < this.state.words[counter].length) {
          wordWrapper.innerHTML = this.state.words[counter].slice(0, wordWrapperContent.length +1)
          wordWrapperContent = wordWrapper.innerHTML
        }else {
          if(counter < this.state.words.length) {
            counter ++ 
          }
          this.setState({
            addingWord : false
          })
        }
      }

      if(counter === this.state.words.length) {
        counter = 0
      }

    }, 250)

  }


  //Redirect to href element
  redirectClick (e, id) {
    
    let el = document.getElementById(id)
    if(document.documentElement.scrollTop === 0) {
      alert(el)
    }
  }

  componentDidMount () {
    this.animationWord('word')
    window.onresize = () => this.showResponsive()
    
    window.onscroll = () => this.scrollNavBar('tools')

  }

  render() {
    return (
      <div className="App">

        <Header
          className = {this.state.className}
          navbar={this.state.navbar}
          click={(e) => this.navbarClick(e)}
          showBar={this.state.slide}
          redirectClick = {this.redirectClick}
          animation = {this.state.animation}/>

        <Bio words = {this.state.words}/>
        
        <Works
          className={this.state.className}/>    

        <Tools className={this.state.fade}/>
        <Footer/>
      </div>
    );
  }
}

export default App
