import React from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import './main.scss';

function MainLayout({children}) {
  return (
    <div className="MainLayout">
      <AppHeader />
      <div className="container">
        <div className="MainLayout__content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout