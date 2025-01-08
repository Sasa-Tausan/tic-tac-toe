export function getTileCoordinate(e) {
  const rowIndex = e.target.dataset.row;
  const colIndex = e.target.dataset.col;
  return [rowIndex, colIndex];
}

export function checkIsBoardFull(board) {
  return board.flat().every((tile) => tile !== " ");
}
