export function getSignTurn (turn) {
    return !(turn % 2) ? 'O' : 'X';
};