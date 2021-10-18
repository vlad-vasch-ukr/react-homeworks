import { Button } from "@mui/material";
import './StartGameButton.scss';

export default function StartGameButton({ startGame }) {
  return (
    <Button className='start-game' onClick={ startGame }>
      Start new game
    </Button>
  )
}