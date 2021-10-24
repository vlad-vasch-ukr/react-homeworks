import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import ResultCard from "../ResultCard/ResultCard";

export default function ResultsContainer({ data }) {
  
  return (
    <Box className="app-content" sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridRowGap: '20px' }}>
      {
        data.map(user => <ResultCard {...user} key={ user.id } />)
      }
    </Box>
  )
}

ResultsContainer.propTypes = {
  data: PropTypes.array.isRequired
}

ResultsContainer.defaultProps = {
  data: []
}
