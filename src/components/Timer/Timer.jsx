import { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import './Timer.scss';

export default function Timer({ handlerResult }) {
  const [timerStart, setTimerStart] = useState(false);
  const [timerStop, setTimerStop] = useState(true);
  const [timerReset, setTimerReset] = useState(true);
  const [timerActive, setTimerActive] = useState(false);
  const [formatedTime, setFormatedTime] = useState('00:00:00');
  const [dateCommit, setDateCommit] = useState(0);
  const [nowDateCommit, setNowDateCommit] = useState(0);

  function startTimer() {
    if (!timerActive) {
      setTimerStart(true);
      setTimerStop(false);
      setTimerActive(true);
      setDateCommit(new Date().getTime() - nowDateCommit);
    }
  }

  function resetTimer() {
    setTimerStart(false);
    setTimerReset(true);
    setTimerStop(true);
    setDateCommit(0);
    setNowDateCommit(0);
    setFormatedTime('00:00:00');
    handlerResult('')
  }

  function stopTimer() {
    setTimerActive(false);
    setTimerStop(true);
    setTimerReset(false);
    handlerResult(formatedTime)
  }

  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = now - dateCommit;
        setNowDateCommit(difference);
        const seconds = Math.floor(difference / 1000 % 60);
        const minutes = Math.floor(difference / 60000 % 60);
        const hours = Math.floor(difference / (60000 * 60) % 60);
        setFormatedTime(`${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`);
      }, 1000)
    }
    return () => clearInterval(interval);
  }, [timerActive]);


  return (
    <Box className='timer'>
      <Typography
        component='p'
        variant='h2'
        align='center'
        mt={ 2 }
      >
        { formatedTime }
      </Typography>
      <Box className='timer__actions'>
        <Button onClick={ startTimer } disabled={ timerStart } className='timer__button'>
          Start
        </Button>
        <Button onClick={ stopTimer } disabled={ timerStop } className='timer__button'>
          Stop
        </Button>
        <Button onClick={ resetTimer } disabled={ timerReset } className='timer__button'>
          Reset
        </Button>
      </Box>
    </Box>
  )
}