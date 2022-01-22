var minimumTotal = function (triangle) {
  let dp = [];
  for (let i = 0; i < triangle.length; i++) dp.push([]);
  function dfs(dp, row, col) {
    if (row === triangle.length) return 0;
    if (dp[row][col] === undefined) {
      const leftNode = dfs(dp, row + 1, col);
      const rightNode = dfs(dp, row + 1, col + 1);
      dp[row][col] = triangle[row][col] + Math.min(leftNode, rightNode);
    }
    return dp[row][col];
  }
  console.log(dfs(dp, 0, 0));
  console.log(dp);
  return dfs(dp, 0, 0);
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
