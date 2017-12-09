import React from 'react'

const Header = (props) => {
  console.log(props.showBar)

  const style = {
    cursor : 'pointer'
  }

  let showNavbar = <span styles={style.navbar} onClick={props.click} className="fa fa-2x fa-bars" aria-hidden="true"></span>
  
  let navList = (
    <ul className="AppHeader-Nav-list">
      <li><a className="AppHeader-Nav-list-items" href="#123">enlace 1</a></li>
      <li><a className="AppHeader-Nav-list-items" href="#123">enlace 1</a></li>
      <li><a className="AppHeader-Nav-list-items" href="#13">enlace 1</a></li>
    </ul>)

  return (
    <header className="AppHeader">
      <div className="AppHeader-logo">
        <h1>miguelzavala.tech</h1>
        <p>Personal Blog</p>
      </div>

      <nav className="AppHeader-Nav">
        {props.navbar ? showNavbar : navList }
        {props.showBar ? <p>show console</p>: null}
      </nav>

    </header>
  )
}

export default Header
