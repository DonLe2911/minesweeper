const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    const row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return(board);
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let i = 0; i < numberOfRows; i++) {
    const row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }

const getNumberOfNeighbourBombs = (bombBoard, i, j) => {
  neighbourOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  rows = bombBoard.length;
  columns = bombBoard[0].length;
  bombs = 0;
  neighbourOffsets.forEach(offset => {
    const neighbourRowIndex = i + offset[0];
    const neighbourColumnIndex = j + offset[1];
    if(neighbourRowIndex >= 0 && neighbourRowIndex < numberOfRows && neighbourColumnIndex >= 0 && neighbourColumnIndex < numberOfColumns) {
      if(bombBoard[neighbourRowIndex][neighbourColumnIndex] === 'B') {
        bombs += 1;
      }
    }
    return numberOfBombs;
  });
}

let numberOfBombsPlaced = 0;
while (numberOfBombsPlaced < numberOfBombs){
  const randomRowIndex = Math.floor(Math.random() * numberOfRows);
  const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  if(board[randomRowIndex][randomColumnIndex] !== 'B') {
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
}
return(board);
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard (3, 3);
const bombBoard = generateBombBoard(3, 3, 5);



console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);
