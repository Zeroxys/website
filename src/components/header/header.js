import React from 'react'
import Radium, {keyframes} from'radium'


const Header = (props) => {

  const fadeIn = keyframes({
    '100%': {right: 0}
  });

  const fadeOut = keyframes({
    '100%': {right: -300}
  });
  
  const styles = {
    slideBar: {
      fontSize:'16px',
      position:'fixed',
      top: 0,
      right: props.animation ? 0 : -300, 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgrey',
      width: '280px',
      height: '100%',
      animation: 'slide-in 1s forwards',
      animationName: props.animation ? fadeOut : fadeIn,
      boxShadow: '-2px 2px 10px grey',
      zIndex : 99999,
    }
  }

  //let isMobile = <span onClick={props.click} className="fa fa-2x fa-bars" aria-hidden="true"></span>
  

  let showTransition = (
    <div style={styles.slideBar}>
      <ul className="showTransition-content">
        <li className="showTransition-list"><a className="showTransition-list-items" href="#123">enlace 1</a></li>
        <li className="showTransition-list"><a className="showTransition-list-items" href="#123">enlace 2</a></li>
        <li className="showTransition-list"><a className="showTransition-list-items" href="#13">enlace 3</a></li>
      </ul>
    </div>
  )

  let navList = (
    <ul className="Nav">
      <li className="Nav-list"><a onClick={(e) => props.redirectClick(e, 'asd')} className="Nav-list-items" href="#123">About</a></li>
      <li className="Nav-list"><a onClick={props.redirectClick} className="Nav-list-items" href="#123">Works</a></li>
      <li className="Nav-list"><a onClick={props.redirectClick} className="Nav-list-items" href="#13">Tools</a></li>
    </ul>)

    let isMobile = (
      <i onClick={props.click} className="fa fa-2x fa-bars" aria-hidden="true">
        {props.showBar ? showTransition : ''}  
      </i>)

  return (
      <header className={`AppHeader ${-props.className}`}>
        <div className="AppHeader-logo">
          <h1>miguelzavala.tech</h1>
          <p>Personal Blog</p>
        </div>

        <nav className="AppHeader">
          {props.navbar ? isMobile : navList }
          {/*props.showBar ? showTransition : ''*/}
        </nav>

      </header>
  )
}

export default Radium(Header)
