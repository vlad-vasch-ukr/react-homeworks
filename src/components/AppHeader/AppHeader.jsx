import React from 'react';
import './main.scss';

function AppHeader() {
  return (
    <header className="AppHeader">
      <div className="container">
        <div className="AppHeader__content">
          <a href="/" className="AppHeader__logo-link">
            <span className="AppHeader__logo">cards</span>
          </a>
          <div className="AppHeader__search">
            <input type="text" className="AppHeader__search-input" />
            <button type="button" className="AppHeader__search-btn">Search</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader