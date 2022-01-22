// var isValidSudoku = function (board) {
//   let col = new Set();
//   let row = new Set();
//   let blk1 = new Set();
//   let blk2 = new Set();
//   let blk3 = new Set();
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[i][j] === ".") continue;
//       if (row.has(board[i][j])) return false;
//       row.add(board[i][j]);
//       if (j / 3 < 1) {
//         if (blk1.has(board[i][j])) return false;
//         blk1.add(board[i][j]);
//       } else if (j / 3 >= 1 && j / 3 < 2) {
//         if (blk2.has(board[i][j])) return false;
//         blk2.add(board[i][j]);
//       } else if (j / 3 >= 2) {
//         if (blk3.has(board[i][j])) return false;
//         blk3.add(board[i][j]);
//       }
//     }
//     row.clear()
//     if (i % 3 === 2) {
//       blk1.clear()
//       blk2.clear()
//       blk3.clear()
//     }
//   }
//   for (let j = 0; j < board[0].length; j++) {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][j] === ".") continue;
//       if (col.has(board[i][j])) return false;
//       col.add(board[i][j]);
//     }
//     col.clear()
//   }
//   return true;
// };

var isValidSudoku = function (board) {
  let col = new Set();
  let row = new Set();
  let blk = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let colEle = board[j][i];
      let rowEle = board[i][j];
      let blkEle =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (colEle !== ".") {
        if (col.has(colEle)) return false;
        col.add(colEle);
      }
      if (rowEle !== ".") {
        if (row.has(rowEle)) return false;
        row.add(rowEle);
      }
      if (blkEle !== ".") {
        if (blk.has(blkEle)) return false;
        blk.add(blkEle);
      }
    }
    col.clear();
    row.clear();
    blk.clear();
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

console.log(
  isValidSudoku([
    [".", ".", "5", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", "1", "4", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "9", "2", ".", "."],
    ["5", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "3", "."],
    [".", ".", ".", "5", "4", ".", ".", ".", "."],
    ["3", ".", ".", ".", ".", ".", "4", "2", "."],
    [".", ".", ".", "2", "7", ".", "6", ".", "."],
  ])
);
