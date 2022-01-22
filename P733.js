//DFS
var floodFill = function (image, sr, sc, newColor) {
  let curColor = image[sr][sc];
  if (newColor === curColor) return image;
  function callDFS(row, col) {
    //edge
    if (
      row < 0 ||
      row >= image.length ||
      col < 0 ||
      col >= image[0].length ||
      image[row][col] !== curColor
    )
      return;
    image[row][col] = newColor;
    //up
    callDFS(row - 1, col);
    //down
    callDFS(row + 1, col);
    //left
    callDFS(row, col - 1);
    //right
    callDFS(row, col + 1);
    return;
  }
  callDFS(sr, sc);
  return image;
};

//BFS
// var floodFill = function (image, sr, sc, newColor) {
//   const currColor = image[sr][sc];
//   if (currColor === newColor) return image;
//   const queue = [[sr, sc]];

//   while (queue.length) {
//     const [row, col] = queue.shift();
//     if (image[row][col] === currColor) {
//       image[row][col] = newColor;
//       //up
//       if (row - 1 >= 0) queue.push([row - 1, col]);
//       //down
//       if (row + 1 < image.length) queue.push([row + 1, col]);
//       //left
//       if (col - 1 >= 0) queue.push([row, col - 1]);
//       //right
//       if (col + 1 < image[0].length) queue.push([row, col + 1]);
//     }
//   }
//   return image;
// };

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    2
  )
);

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
