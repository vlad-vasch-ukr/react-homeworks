import { useState } from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { useGameStore } from '../../context';
import { getSignTurn, calculateWinner } from '../../utils';
import { addToHistory, addWinner, updateSignTurn, updatePlayerInfo } from '../../actions';
import ListOfMoves from '../ListOfMoves/ListOfMoves';
import Modal from '../UI/Modal';
import Settings from '../Settings/Settings';
import SettingsButton from '../SettingsButton/SettingsButton';
import StartGameButton from '../StartGameButton/StartGameButton';
import { getPlayerName } from '../../utils';
import { updateNextMove, clearHistory } from '../../actions';

export default function Game() {
    const [state, dispatch] = useGameStore();
    const currentStep = state.history[state.history.length - 1];
    const [showModal, setShowModal] = useState(false);
    const [gameEnd, setGameEnd] = useState(false);
    const [gameStart, setGameStart] = useState(false);

    const handleClick = (i) => {
      const squares = [...currentStep.squares];
      const move = getSignTurn(state.history.length, state.players.first.mark, state.players.second.mark, state.players.firstMove);
      squares[i] = move;

      const winner = calculateWinner(squares);
      if (winner) {
        setGameEnd(true);
        dispatch(addWinner(state.nextMove));
      }

      const nextMove = getPlayerName(state.players.first, state.players.second, move);
      dispatch(updateNextMove(nextMove))
      
      dispatch(addToHistory(squares));
      setGameStart(true);
    };

    const toggleModal = () => {
      setShowModal(!showModal)
    };

    const startNewGame = () => {
      dispatch(clearHistory(state.history.length - 1));
      setGameStart(false);
      setGameEnd(false);
      dispatch(addWinner(null));
      const name = state.players[state.players.firstMove].name || state.players[state.players.firstMove].mark;
      dispatch(updateNextMove(name))
    }

    return (
      <div className="game">
        <Board squares={currentStep.squares} onClick={handleClick}/>
        <ListOfMoves />
        <SettingsButton handleOpen={ toggleModal } disabled={ gameStart } />
        { gameEnd && <StartGameButton startGame={ startNewGame } />}
        <Modal open={ showModal } title='Settings' handleClose={ toggleModal }>
          <Settings handleClose={ toggleModal } />
        </Modal>
      </div>
    )
}