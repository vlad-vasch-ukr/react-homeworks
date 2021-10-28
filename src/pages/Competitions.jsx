import { useEffect, Fragment, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCompetitions } from '../store/actions/thunks';
import { useSelector } from 'react-redux';
import Search from '../components/Search/Search';

export default function Competitions() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { competitions } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, []);

  const filteredCompetitions = useMemo(() => {
    return competitions.filter(competition => competition.name.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, competitions]);

  const search = (value) => {
    setSearchValue(value)
  }

  return (
    <div className='competitions-view'>
      <Search searchHandler={ search } />
      {
        filteredCompetitions.map(item => <div>{item.name}</div>)
      }
    </div>
  )
}