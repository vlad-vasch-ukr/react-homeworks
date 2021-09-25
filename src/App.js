import './App.css';
import { useState } from 'react';
import CardList from './components/CardList/CardsList';
import CreateCard from './components/CreateCard/CreateCard';
import { userData } from './data/userData';
import AppModal from './components/AppModal/AppModal';
import MainLayout from './layouts/MainLayout';

function App() {
  const [users, setUser] = useState(userData);

  function createUserCard(user) {
    setUser([...users, user]);
  }

  return (
    <div className="App">
      <MainLayout>
        <CardList users={ users } />
        <CreateCard createUserCard={ createUserCard } usersLength={ users.length } />
        <AppModal />
      </MainLayout>
    </div>
  );
}

export default App;
