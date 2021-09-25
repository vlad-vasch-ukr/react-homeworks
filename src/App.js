import './App.css';
import { useState, useMemo } from 'react';
import CardList from './components/CardList/CardsList';
import CreateCard from './components/CreateCard/CreateCard';
import { userData } from './data/userData';
import AppModal from './components/AppModal/AppModal';
import MainLayout from './layouts/MainLayout';
import Context from './helpers/Context';

function App() {

  //data
  const [users, setUser] = useState(userData);
  const [filter, setFilter] = useState('');

  //computed
  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }, [filter, users])

  //methods
  function createUserCard(user) {
    setUser([...users, user]);
  }

  function filterUsers(name) {
    setFilter(name)
  }


  return (
    <div className="App">
      <Context.Provider value={{ filterUsers }}>
        <MainLayout>
          <CardList users={ filteredUsers } />
          <CreateCard createUserCard={ createUserCard } />
          <AppModal />
        </MainLayout>
      </Context.Provider>
    </div>
  );
}

export default App;
