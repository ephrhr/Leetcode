var rotate = function (matrix) {
  let n = matrix.length;
  function rotation(i, j) {
    let tmp = matrix[i][j];
    matrix[i][j] = matrix[n - 1 - j][i];
    matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
    matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
    matrix[j][n - 1 - i] = tmp;
  }
  for (let i = 0; i < Math.floor(n / 2); i++)
    for (let j = i; j < n - 1 - i; j++) rotation(i, j);

  console.log(matrix);
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
