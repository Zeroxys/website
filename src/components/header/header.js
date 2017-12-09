import React from 'react'

const Header = () => {
    return (
      <header className="AppHeader">
        <div className="AppHeader-logo">
          <h1>miguelzavala.tech</h1>
          <p>Personal Blog</p>
        </div>

        <nav className="AppHeader-Nav">
          <ul className="AppHeader-Nav-list">
            <li><a className="AppHeader-Nav-list-items" href="#123">enlace 1</a></li>
            <li><a className="AppHeader-Nav-list-items" href="#123">enlace 1</a></li>
            <li><a className="AppHeader-Nav-list-items" href="#13">enlace 1</a></li>
          </ul>
        </nav>

      </header>
    )
}

export default Header
