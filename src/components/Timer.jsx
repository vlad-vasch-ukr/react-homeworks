import React, { useState, useEffect } from "react";
import './main.scss';

export default function Timer() {
  const [start, setStart] = useState(false)
  const initMarkers = localStorage.getItem('react-timer') ? JSON.parse(localStorage.getItem('react-timer')) : []
  const [timeMarkers, setTimeMarkers] = useState(initMarkers);
  const [timerActive, setTimerActive] = useState(false);
  const [formatedTime, setFormatedTime] = useState('00:00:00:00')
  const [dateCommit, setDateCommit] = useState(0)
  const [nowDateCommit, setNowDateCommit] = useState(0)
  const actions = [
    { class: start ? 'blue' : 'green', name: start ? 'Continue' : 'Start', handler: startTimer },
    { class: 'red', name: 'Stop', handler: stopTimer },
    { class: 'orange', name: 'Reset', handler: resetTimer }
  ]

  useEffect(() => {
    if (timeMarkers.length) {
      localStorage.setItem('react-timer', JSON.stringify(timeMarkers))
    }
  }, [timeMarkers])


  function startTimer() {
    setStart(true)
    setTimerActive(true)
    setDateCommit(new Date().getTime() - nowDateCommit)
    setFormatedTime('00:00:00:00')
  }

  function resetTimer() {
    setStart(false)
    setTimerActive(false)
    setTimeMarkers([...timeMarkers, formatedTime])
    setDateCommit(0)
    setNowDateCommit(0)
  }

  function stopTimer() {
    if (timerActive) {
      setTimerActive(false)
      setTimeMarkers([...timeMarkers, formatedTime])
    }
  }

  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        const now = new Date().getTime()
        const difference = now - dateCommit
        setNowDateCommit(difference)
        const milliseconds = Math.floor(difference / 10 % 100)
        const seconds = Math.floor(difference / 1000 % 60)
        const minutes = Math.floor(difference / 60000 % 60)
        const hours = Math.floor(difference / (60000 * 60) % 60)
        setFormatedTime(`${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}:${String(milliseconds).padStart(2, 0)}`)
      }, 10)
    }
    return () => clearInterval(interval);
  }, [timerActive]);


  return (
    <div className="Timer">
      <h1 className="Timer__time">{ formatedTime }</h1>
      <div className="Timer__actions">
        {
          actions.map(item => {
            return (
              <button
                className={ `Timer__btn ${item.class}` }
                key={ item.class }
                onClick={ item.handler }
              >
                {item.name}
              </button>
            )
          })
        }
      </div>
      {
        !!timeMarkers.length && <ul className="Timer__markers">
          { timeMarkers.map((item, index) => <li className="Timer__marker" key={ index }>{item}</li>) }
        </ul>
      }
    </div>
  )
}
