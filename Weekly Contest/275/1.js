// var checkValid = function (matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     let set = new Set();
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (set.has(matrix[i][j])) return false;
//       set.add(matrix[i][j]);
//     }
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     let set = new Set();
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (set.has(matrix[j][i])) return false;
//       set.add(matrix[j][i]);
//     }
//   }
//   return true;
// };
var checkValid = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let cols = new Set(),
      rows = new Set(matrix[i]);
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[j][i] > matrix.length) return false;
      cols.add(matrix[j][i]);
    }
    if (cols.size < matrix.length || rows.size < matrix.length) return false;
  }
  return true;
};

console.log(
  checkValid([
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
  ])
);
console.log(
  checkValid([
    [1, 1, 1],
    [1, 2, 3],
    [1, 2, 3],
  ])
);
