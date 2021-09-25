import React from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';
import './main.scss';

function MainLayout({children}) {
  return (
    <div className="MainLayout">
      <AppHeader />
      <main>
        <div className="container">
          <div className="MainLayout__content">
            {children}
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  )
}

export default MainLayout