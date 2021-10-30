import { Typography } from '@mui/material';
import { useEffect, useMemo, useState, Fragment } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchUsers, addNewUser, updateUnsavedNewUser, showNewUserTimer, getWinner, fetchCompetitions } from '../../store/actions';
import { useSelector } from "react-redux";
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Search from '../../components/Search/Search';
import ResultsContainer from '../../components/ResultsContainer/ResultsContainer';
import NewUserModal from '../../components/NewUserModal/NewUserModal';
import Winner from '../../components/Winner/Winner';
import { calculateWinner } from '../../utils/calculateWinner';
import './Participants.scss';

export default function Particimants() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { competitionId } = useParams();
  const [searchValue, setSearchValue] = useState('');
  const { unsavedUser, toggleNewUserTimer, users, usersAmount, competitions } = useSelector((state) => state.users);
  const [winner, setWinner] = useState('');
  const [currCompetition, setCurrCompetition] = useState('');

  useEffect(() => {
    dispatch(fetchUsers(competitionId));
    if (!competitions.length) {
      dispatch(fetchCompetitions());
    }
  }, []);

  useEffect(() => {
    const competition = competitions.find(item => item.id === +competitionId);
    setCurrCompetition(competition || {})
  }, [competitions]);

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

  const getWinnerUser = () => {
    setWinner(calculateWinner(users));
    setTimeout(() => {
      dispatch(getWinner(competitionId));
      history.push('/');
    }, 1500)
  }

  const search = (value) => {
    setSearchValue(value);
  }

  return (
    <div className={['participants-view', currCompetition.status === 'active' ? 'active' : 'finished'].join(' ')}>
      {
        currCompetition.status !== 'active' &&
          <div>
            <Typography mb={2}>
              ID: {currCompetition.id}
            </Typography>
            <Typography mb={2}>
              Name: {currCompetition.name}
            </Typography>
            <Typography mb={2}>
              Winner: {currCompetition?.winner?.name}
            </Typography>
            <Typography mb={2}>
              Time: {currCompetition?.winner?.time}
            </Typography>
            <Typography component='h3' variant='h3' mb={3} textAlign='center'>
              Participants
            </Typography>
          </div>
      }
      <ResultsContainer data={ filteredUsers } />
      {
        currCompetition.status === 'active' && 
        <Fragment>
          <Search
            className={['app-search']}
            searchHandler={ search }
            placeholder='Enter participant name...'
          />
          <div className="app-side">
            <RegistrationForm />
            <Winner
              usersLength={ usersAmount }
              winner={ winner }
              handler={ getWinnerUser }
            />
          </div>
          <NewUserModal
            open={ toggleNewUserTimer }
            {...unsavedUser}
            close={ closeModal }
            handler={ saveNewUser }
          />
        </Fragment>
      }
    </div>
  )
}