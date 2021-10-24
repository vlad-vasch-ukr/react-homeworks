import { useState } from "react";
import { Dialog, DialogContent, Typography, DialogActions, Button } from "@mui/material";
import PropTypes from 'prop-types';
import Timer from "../Timer/Timer";

export default function NewUserModal({ open, id, firstName, secondName, close, handler }) {
  const [timerResult, setTimerResult] = useState('');
  const getTimerResult = (result) => {
    setTimerResult(result);
  }
  const save = () => {
    handler.bind(null, timerResult)();
    close();
  }

  return (
    <Dialog open={ open } onClose={ close } fullWidth>
      <DialogContent>
        <Typography align='center' mb={ 2 } component='p' variant='h3'>
          Participant
        </Typography>
        <Typography component='p' mb={ 1 } variant='h5' align='center'>
          ID: { id }
        </Typography>
        <Typography component='p' variant='h5' align='center'>
          Participant: { `${firstName} ${secondName}` }
        </Typography>
        <Timer handlerResult={ getTimerResult } />
      </DialogContent>
      <DialogActions sx={{ margin: '30px auto 0 auto' }}>
        <Button onClick={ close } variant="contained">Cancel</Button>
        <Button variant="contained" disabled={ !timerResult } onClick={ save }>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

NewUserModal.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
  close: PropTypes.func,
  handler: PropTypes.func
}

NewUserModal.defaultProps = {
  id: 0,
  firstName: '',
  secondName: '',
  close: () => {},
  handler: () => {}
}
