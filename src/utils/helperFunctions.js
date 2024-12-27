export function getTileCoordinate(e) {
  const rowIndex = e.target.dataset.row;
  const colIndex = e.target.dataset.col;
  return [rowIndex, colIndex];
}
