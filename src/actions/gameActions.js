export const ADD_TO_HISTORY = 'add to history';
export const ADD_WINNER = 'add winner';
export const UPDATE_NEXT_MOVE = 'update curr move';
export const UPDATE_PLAYERS_INFO = 'update player info';
export const CLEAR_HISTORY = 'clear history';
export const CLEAR_HISTORY_BY_INDEX = 'clear history by index';
export const UPDATE_GAME_START = 'update game start';
export const UPDATE_GAME_END = 'update game end';
export const UPDATE_WINNERS_LIST = 'update winners list';

export const addToHistory = (squares) => ({
    type: ADD_TO_HISTORY,
    payload: { squares },
})

export const addWinner = (winner) => ({
    type: ADD_WINNER,
    payload: winner
})

export const updateNextMove = (move) => ({
    type: UPDATE_NEXT_MOVE,
    payload: move
})

export const updatePlayerInfo = (players) => ({
    type: UPDATE_PLAYERS_INFO,
    payload: players
})

export const clearHistory = () => ({
    type: CLEAR_HISTORY
})

export const clearHistoryByIndex = (index) => ({
    type: CLEAR_HISTORY_BY_INDEX,
    payload: index
})

export const updateGameEnd = (boolean) => ({
    type: UPDATE_GAME_END,
    payload: boolean
})

export const updateGameStart = (boolean) => ({
    type: UPDATE_GAME_START,
    payload: boolean
})

export const updateWinnersList = (array) => ({
    type: UPDATE_WINNERS_LIST,
    payload: array
})