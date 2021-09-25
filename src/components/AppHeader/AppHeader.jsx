import { useContext } from 'react';
import './main.scss';
import Context from '../../helpers/Context';

function AppHeader() {
  const { filterUsers } = useContext(Context)
  
  return (
    <header className="AppHeader">
      <div className="container">
        <div className="AppHeader__content">
          <a href="/" className="AppHeader__logo-link">
            <span className="AppHeader__logo">cards</span>
          </a>
          <div className="AppHeader__search">
            <input
              type="text"
              placeholder="Search"
              onChange={ (e) => filterUsers(e.target.value) }
              className="AppHeader__search-input"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader