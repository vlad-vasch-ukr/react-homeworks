export function getPlayerName (firstPlayer, secondPlayer, currMove) {
  if (firstPlayer.mark !== currMove) {
    return firstPlayer.name || firstPlayer.mark;
  } else {
    return secondPlayer.name || secondPlayer.mark;
  }
};