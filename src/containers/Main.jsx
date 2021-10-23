import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/actions';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Search from '../components/Search/Search';
import ResultsContainer from '../components/ResultsContainer/ResultsContainer';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Fragment>
      <Search className={['app-search']} />
      <ResultsContainer />
      <div className="app-side">
        <RegistrationForm />
      </div>
    </Fragment>
  )
}