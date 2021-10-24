import { useEffect, Fragment, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers, addNewUser, updateUnsavedNewUser, showNewUserTimer, getWinner } from '../store/actions';
import { useSelector } from "react-redux";
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Search from '../components/Search/Search';
import ResultsContainer from '../components/ResultsContainer/ResultsContainer';
import NewUserModal from '../components/NewUserModal/NewUserModal';
import Winner from '../components/Winner/Winner';

export default function Main() {
  const dispatch = useDispatch();
  const { unsavedUser, toggleNewUserTimer, users, serchUserValue, usersAmount, winner } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user => String(user.id).includes(serchUserValue) || user.firstName.toLowerCase().includes(serchUserValue.toLowerCase()))
  }, [serchUserValue, users]);

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

  return (
    <Fragment>
      <Search className={['app-search']} />
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
    </Fragment>
  )
}