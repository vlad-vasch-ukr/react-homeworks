import './App.css';
import { useState } from 'react';
import AppHeader from './components/AppHeader';
import CardList from './components/CardsList';
import CreateCard from './components/CreateCard';
import { userData } from './data/userData'

function App() {
  const [users, setUser] = useState(userData);

  function createUserCard(user) {
    setUser([...users, user]);
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="container">
        <div className="App__content">
          <CardList users={ users } />
          <CreateCard createUserCard={ createUserCard } usersLength={ users.length } />
        </div>
      </div>
    </div>
  );
}

export default App;
