import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateUserSearchValue } from '../../store/actions';
import './Search.scss';

export default function Search({ className }) {
  const dispatch = useDispatch();

  return (
    <TextField
      placeholder='Enter participant name...'
      className={['search', ...className].join(' ')}
      onChange={ ({ target: { value } }) => dispatch(updateUserSearchValue(value)) }
    />
  )
}

Search.propTypes = {
  className: PropTypes.array
}

Search.defaultProps = {
  className: []
}
