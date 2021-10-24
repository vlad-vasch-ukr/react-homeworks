import { Card, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteUserById } from "../../store/actions";
import PropTypes from 'prop-types';

export default function ResultCard({ id, firstName, time }) {
  const dispatch = useDispatch();

  return (
    <Card className='result-card' sx={{ padding: '15px', border: '1px solid #000', maxWidth: '200px', maxHeight: '190px' }}>
      <Typography mb={ 2 } component='p' sx={{ fontSize: '16px' }}>
        ID: { id }
      </Typography>
      <Typography mb={ 2 } component='p' sx={{ fontSize: '16px' }}>
        Name: { firstName }
      </Typography>
      <Typography mb={ 2 } component='p' sx={{ fontSize: '16px' }}>
        Time: { time }
      </Typography>
      <Button
        variant="contained"
        sx={{ fontSize: '16px', display: 'block', margin: '0 auto' }}
        onClick={ () => dispatch(deleteUserById(id)) }
      >
        delete
      </Button>
    </Card>
  )
}

ResultCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}
