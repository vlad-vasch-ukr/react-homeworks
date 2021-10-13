import { gameParams } from '../constants/gameParams';
import { ADD_TO_HISTORY } from '../actions';

export const initialState = {
    isXTurn: true,
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
        default:
            return state;
    }
};
