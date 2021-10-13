export const ADD_TO_HISTORY = 'add to history';

export const addToHistory = (squares) => ({
    type: ADD_TO_HISTORY,
    payload: { squares },
})