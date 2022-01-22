var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  let n = grid.length;
  let m = grid[0].length;
  const callDFS = (row, col) => {
    if (row < 0 || col < 0 || row >= n || col >= m || !grid[row][col]) return 0;
    grid[row][col] = 0;
    return (
      1 +
      callDFS(row - 1, col) +
      callDFS(row, col - 1) +
      callDFS(row + 1, col) +
      callDFS(row, col + 1)
    );
  };
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j]) maxArea = Math.max(maxArea, callDFS(i, j));
  return maxArea;
};
console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
