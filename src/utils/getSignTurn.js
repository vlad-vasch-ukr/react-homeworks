export function getSignTurn (turn, firstPlayer = 'X', secondPlayer = 'O', move = 'first') {
    if (move === 'first') {
        return !(turn % 2) ? secondPlayer : firstPlayer;
    } else {
        return !(turn % 2) ? firstPlayer : secondPlayer;
    }
};