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
  const [users, setUser] = useState(userData)
  const [filter, setFilter] = useState('')
  const ageSortOptions = [
    { name: 'From less', value: '0-9' },
    { name: 'From more', value: '9-0' }
  ]
  const [ageSort, setAgeSort] = useState(ageSortOptions[0].value)
  const [currentUser, setCurrentUser] = useState('')
  const [showModal, setShowModal] = useState(false)

  //computed
  const sordedUsersByAge = useMemo(() => {
    return users.filter(user => {
      return user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    })
  }, [filter, users])

  const sortedUsers = useMemo(() => {
    if (ageSort === '0-9') {
      return sordedUsersByAge.sort((a, b) => a.age - b.age)
    } else if (ageSort === '9-0') {
      return sordedUsersByAge.sort((a, b) => b.age - a.age)
    }
  }, [ageSort, sordedUsersByAge])

  //methods
  const createUserCard = (user) => {
    setUser([...users, user]);
  }

  const sortUsersByName = (name) => {
    setFilter(name)
  }

  const sortUsersByAge = (range) => {
    setAgeSort(range)
  }

  const findCurrentUser = (id) => {
    setCurrentUser(users.find(user => user._id === id))
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  
  return (
    <div className="App">
      <Context.Provider value={{ 
        sortUsersByName, 
        ageSortOptions, 
        sortUsersByAge,
        ageSort
      }}>
        <MainLayout>
          <CardList users={ sortedUsers } findCurrentUser={ findCurrentUser } />
          <CreateCard createUserCard={ createUserCard } />
          <AppModal
            user={ currentUser }
            showModal={ showModal }
            closeModal={ closeModal }
          />
        </MainLayout>
      </Context.Provider>
    </div>
  );
}

export default App;
