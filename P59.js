// var generateMatrix = function (n) {
//   let matrix = new Array(n);
//   for (let i = 0; i < n; i++) matrix[i] = new Array(n).fill(0);
//   let num = 1;
//   const dir = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
//   ];
//   let i = 0;
//   let j = 0;
//   let turn = 0;
//   while (num <= n * n) {
//     matrix[i][j] = num++;
//     let next = [i + dir[turn][0], j + dir[turn][1]];
//     if (
//       (next[0] === 0 && next[1] === n) ||
//       (next[0] === n && next[1] === n - 1) ||
//       (next[0] === n - 1 && next[1] === -1) ||
//       (next[0] >= 0 &&
//         next[0] <= n &&
//         next[1] >= 0 &&
//         next[1] <= n &&
//         matrix[next[0]][next[1]] !== 0)
//     )
//       turn = (turn + 1) % 4;
//     i += dir[turn][0];
//     j += dir[turn][1];
//   }
//   return matrix;
// };

var generateMatrix = function (n) {
  let matrix = new Array(n);
  for (let i = 0; i < n; i++) matrix[i] = new Array(n);
  let num = 1;
  let top = 0;
  let left = 0;
  let right = n - 1;
  let buttom = n - 1;

  while (num <= n * n) {
    //right

    for (let i = left; i <= right; i++) matrix[top][i] = num++;
    top++;

    //down

    for (let i = top; i <= buttom; i++) matrix[i][right] = num++;
    right--;

    //left

    for (let i = right; i >= left; i--) matrix[buttom][i] = num++;
    buttom--;

    //up

    for (let i = buttom; i >= top; i--) matrix[i][left] = num++;
    left++;
  }
  return matrix;
};

console.log(generateMatrix(5));
console.log(generateMatrix(4));
console.log(generateMatrix(3));
console.log(generateMatrix(1));
