import React from 'react'

const Header = (props) => {

  let showNavbar = <span onClick={props.click} className="fa fa-2x fa-bars" aria-hidden="true"></span>
  
  let showTransition = (
    <ul className="showTransition">
      <li className="showTransition-list"><a className="showTransition-list-items" href="#123">enlace 1</a></li>
      <li className="showTransition-list"><a className="showTransition-list-items" href="#123">enlace 1</a></li>
      <li className="showTransition-list"><a className="showTransition-list-items" href="#13">enlace 1</a></li>
    </ul>
  )

  let navList = (
    <ul className="Nav">
      <li className="Nav-list"><a onClick={(e) => props.redirectClick(e, 'asd')} className="Nav-list-items" href="#123">About</a></li>
      <li className="Nav-list"><a onClick={props.redirectClick} className="Nav-list-items" href="#123">Works</a></li>
      <li className="Nav-list"><a onClick={props.redirectClick} className="Nav-list-items" href="#13">Tools</a></li>
    </ul>)

  return (
    <header className={`AppHeader ${-props.className}`}>
      <div className="AppHeader-logo">
        <h1>miguelzavala.tech</h1>
        <p>Personal Blog</p>
      </div>

      <nav className="AppHeader">
        {props.navbar ? showNavbar : navList }
        {props.showBar ? showTransition : ''}
      </nav>

    </header>
  )
}

export default Header
