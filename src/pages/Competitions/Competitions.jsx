import { Button, Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCompetitions } from '../../store/actions/thunks';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Search from '../../components/Search/Search';
import CompetitionCard from '../../components/CompetitionCard/CompetitionCard';
import './Competitions.scss';

export default function Competitions() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { competitions } = useSelector((state) => state.users);

  useEffect(() => {
    if (!competitions.length) {
      dispatch(fetchCompetitions());
    }
  }, []);

  const filteredCompetitions = useMemo(() => {
    return competitions.filter(competition => competition.name.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, competitions]);

  const search = (value) => {
    setSearchValue(value)
  }

  const goToCreatePage = () => {
    history.push('/create');
  }

  return (
    <div className="competitions-view">
      <Box display='flex' alignItems='center'>
        <Search searchHandler={ search } placeholder='Enter competition name...' />
        <Button variant='contained' onClick={ goToCreatePage } sx={{ marginLeft: '20px' }}>
          Create competition
        </Button>
      </Box>
      <div className="competitions-view__items">
        {
          filteredCompetitions.map(item => <CompetitionCard {...item} key={ item.id } />)
        }
      </div>
    </div>
  )
}