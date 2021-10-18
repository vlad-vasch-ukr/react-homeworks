import { gameParams } from '../constants/gameParams';
import { ADD_TO_HISTORY, ADD_WINNER, UPDATE_NEXT_MOVE, UPDATE_PLAYERS_INFO, CLEAR_HISTORY, CLEAR_HISTORY_BY_INDEX, UPDATE_GAME_END, UPDATE_GAME_START } from '../actions';

export const initialState = {
    isXTurn: true,
    winner: null,
    nextMove: 'Player 1',
    gameStart: false,
    gameEnd: false,
    players: {
        first: {
            name: 'Player 1',
            mark: 'X'
        },
        second: {
            name: 'Player 2',
            mark: 'O'
        },
        firstMove: 'first'
    },
    history: [
        {
            squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
        }
    ],
};

export const gameReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
            };
        case ADD_WINNER:
            return {
                ...state,
                winner: action.payload
            }
        case UPDATE_NEXT_MOVE:
            return {
                ...state,
                nextMove: action.payload
            }
        case UPDATE_PLAYERS_INFO:
            return {
                ...state,
                players: action.payload
            }
        case CLEAR_HISTORY:
            return {
                ...state,
                history: state.history.slice(0, 1)
            }
        case CLEAR_HISTORY_BY_INDEX:
            return {
                ...state,
                history: state.history.slice(0, action.payload)
            }
        case UPDATE_GAME_START:
            return {
                ...state,
                gameStart: action.payload
            }
        case UPDATE_GAME_END:
            return {
                ...state,
                gameEnd: action.payload
            }
        default:
            return state;
    }
};
