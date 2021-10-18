import { Fragment, useState } from "react";
import { Grid, TextField, Typography, Button, Select, MenuItem, ButtonGroup, Box } from "@mui/material";
import { useGameStore } from '../../context';
import { updatePlayerInfo, updateNextMove } from "../../actions";
import { getSignTurn, random } from "../../utils";

export default function Settings({ handleClose }) {
  const [state, dispatch] = useGameStore();
  const [firstMark, setFirstMark] = useState('X');
  const [secondMark, setSecondMark] = useState('O');
  const [firstName, setFirstName] = useState('Player 1');
  const [secondName, setSecondName] = useState('Player 2');
  const [firstMove, setFirsrMove] = useState('first');

  const submitSettings = () => {
    if (firstMark !== secondMark) {
      const form = {
        first: {
          name: firstName,
          mark: firstMark
        },
        second:{
          name: secondName,
          mark: secondMark
        },
        firstMove: firstMove
      }
      dispatch(updatePlayerInfo(form))
      dispatch(updateNextMove(form[form.firstMove].name || form[form.firstMove].mark))
      handleClose()
    }
  };

  const randomGame = () => {
    const turn = random(100);
    const move = random(100);
    const mark = getSignTurn(turn);
    setFirstMark(mark);
    setSecondMark(mark === 'X' ? 'O' : 'X');
    setFirsrMove(move % 2 ? 'first' : 'second')
  }



  return (
    <>
      <Grid container spacing={ 2 }>
        <Grid item xs={ 6 }>
          <TextField
            value={ firstName }
            fullWidth
            label='Name'
            onChange={ (e) => setFirstName(e.target.value) }
            sx={{ marginTop: '15px' }}
          />
        </Grid>
        <Grid item xs={ 6 }>
          <TextField
            value={ secondName }
            fullWidth
            label='Name'
            onChange={ (e) => setSecondName(e.target.value) }
            sx={{ marginTop: '15px' }}
          />
        </Grid>
        <Grid item xs={ 6 }>
          <Typography component='p' variant='p' mb={ 1 }>
            Select mark:
          </Typography>
          <Select
            value={ firstMark }
            fullWidth
            error={ firstMark === secondMark }
            onChange={ (e) => setFirstMark(e.target.value) }
          >
            <MenuItem value='X'>Mark: X</MenuItem>
            <MenuItem value='O'>Mark: O</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={ 6 }>
          <Typography component='p' variant='p' mb={ 1 }>
            Select mark:
          </Typography>
          <Select
            value={ secondMark }
            fullWidth
            error={ firstMark === secondMark }
            onChange={ (e) => setSecondMark(e.target.value) }
          >
            <MenuItem value='X'>Mark: X</MenuItem>
            <MenuItem value='O'>Mark: O</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={ 12 }>
          <Typography component='p' mb={ 1 }>
            First move:
          </Typography>
          <Select
            value={ firstMove }
            onChange={ (e) => setFirsrMove(e.target.value) }
            fullWidth
          >
            <MenuItem value='first'>Player 1</MenuItem>
            <MenuItem value='second'>Player 2</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center' }}>
        <ButtonGroup variant="contained" sx={{ margin: '30px auto 0 auto' }} size="large" aria-label="large primary button group">
          <Button onClick={ submitSettings }>Save</Button>
          <Button onClick={ randomGame }>Random</Button>
          <Button onClick={ handleClose }>Close</Button>
        </ButtonGroup>
      </Box>
    </>
  )
}