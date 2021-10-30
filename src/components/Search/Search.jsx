import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import './Search.scss';

export default function Search({ className, searchHandler, placeholder }) {
  return (
    <TextField
      placeholder={ placeholder }
      className={['search', ...className].join(' ')}
      onChange={ (e) => searchHandler.bind(null, e.target.value)() }
      fullWidth
    />
  )
}

Search.propTypes = {
  className: PropTypes.array,
  searchHandler: PropTypes.func
}

Search.defaultProps = {
  className: [],
  searchHandler: () => {}
}
