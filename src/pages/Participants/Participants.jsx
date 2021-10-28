import { useEffect, useMemo, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchUsers, addNewUser, updateUnsavedNewUser, showNewUserTimer, getWinner } from '../../store/actions';
import { useSelector } from "react-redux";
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Search from '../../components/Search/Search';
import ResultsContainer from '../../components/ResultsContainer/ResultsContainer';
import NewUserModal from '../../components/NewUserModal/NewUserModal';
import Winner from '../../components/Winner/Winner';
import './Participants.scss';

export default function Particimants() {
  const dispatch = useDispatch();
  const { competitionId } = useParams();
  const [searchValue, setSearchValue] = useState('');
  const { unsavedUser, toggleNewUserTimer, users, usersAmount, winner } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers(competitionId));
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user => String(user.id).includes(searchValue) || user.firstName.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, users]);

  const closeModal = () => {
    dispatch(showNewUserTimer(false));
    dispatch(updateUnsavedNewUser({}));
  }

  const saveNewUser = (timeResult) => {
    const newUser = Object.assign({}, unsavedUser);
    newUser.time = timeResult;
    dispatch(addNewUser(newUser));
    dispatch(updateUnsavedNewUser({}));
  }

  const calculateWinner = () => {
    dispatch(getWinner())
  }

  const search = (value) => {
    setSearchValue(value)
  }

  return (
    <div className='participants-view'>
      <Search className={['app-search']} searchHandler={ search } />
      <ResultsContainer data={ filteredUsers } />
      <div className="app-side">
        <RegistrationForm />
        <Winner
          usersLength={ usersAmount }
          winner={ winner }
          handler={ calculateWinner }
        />
      </div>
      <NewUserModal
        open={ toggleNewUserTimer }
        {...unsavedUser}
        close={ closeModal }
        handler={ saveNewUser }
      />
    </div>
  )
}