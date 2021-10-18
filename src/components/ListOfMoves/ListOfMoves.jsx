import { Typography, Box, Button } from '@mui/material';
import { useGameStore } from '../../context';
import { clearHistoryByIndex, updateNextMove, addWinner, updateGameEnd, updateGameStart } from '../../actions';
import { getSignTurn } from '../../utils';
import './ListOfMoves.scss';

export default function ListOfMoves() {
  const [state, dispatch] = useGameStore();
  const goToPrevStep = (index) => {
    const move = getSignTurn(index , state.players.first.mark, state.players.second.mark, state.players.firstMove);
    let nextMove = null;
    if (state.players.first.mark === move) {
      nextMove = state.players.first.name || state.players.first.mark
    } else {
      nextMove = state.players.second.name || state.players.second.mark
    }
    if (index === 1) {
      dispatch(updateGameStart(false));
    }
    dispatch(updateNextMove(nextMove));
    dispatch(clearHistoryByIndex(index));
    dispatch(addWinner(null));
    dispatch(updateGameEnd(false));
  }

  return (
    <div className="moves">
      <Typography component='p' sx={{ color: '#fff', fontWeight: '600' }}>
        { !state.winner ? `Next player is ${state.nextMove}` : `Winner is ${state.winner}` }
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {
          state.history.map((item, index) => {
            return (
              <Button
                key={ index }
                sx={{ backgroundColor: '#fff', fontSize: '12px', color: '#000', marginTop: '12px', '&:hover': { backgroundColor: '#fff' } }}
                onClick={ goToPrevStep.bind(null, index + 1) }
              >
                { index ? `Go to #${index}` : 'Start the Game' }
              </Button>
            )
          })
        }
      </Box>
    </div>
  )
}