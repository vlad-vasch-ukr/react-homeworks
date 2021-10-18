import { Button } from "@mui/material";
import PanToolIcon from '@mui/icons-material/PanTool';
import { useGameStore } from '../../context';
import { addWinner, updateGameEnd } from "../../actions";
import './MoveUpButton.scss';

export default function MoveUpButton() {
  const [state, dispatch] = useGameStore();
  const endGame = () => {
    dispatch(addWinner(state.nextMove));
    dispatch(updateGameEnd(true));
  }

  return (
    <Button className='move-up-button' onClick={ endGame }>
      <PanToolIcon />
    </Button>
  )
}