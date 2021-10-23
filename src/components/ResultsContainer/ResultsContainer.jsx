import { Box } from '@mui/system';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ResultCard from "../ResultCard/ResultCard";

export default function ResultsContainer() {
  const { users, serchUserValue } = useSelector((state) => state.users);
  const filteredUsers = useMemo(() => {
    return users.filter(user => String(user.id).includes(serchUserValue) || user.name.toLowerCase().includes(serchUserValue.toLowerCase()))
  }, [serchUserValue, users]);
  
  return (
    <Box className="app-content" sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridRowGap: '20px' }}>
      {
        filteredUsers.map(user => <ResultCard {...user} key={ user.id } />)
      }
    </Box>
  )
}