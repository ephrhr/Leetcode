var mostPoints = function (questions) {
  let dp = new Array(questions.length).fill(0);
  let max = 0;
  for (let i = questions.length - 1; i >= 0; i--) {
    dp[i] = Math.max(max, questions[i][0] + (dp[i + 1 + questions[i][1]] || 0));
    max = Math.max(max, dp[i]);
  }
  return max;
};

console.log(
  mostPoints([
    [3, 2],
    [4, 3],
    [4, 4],
    [2, 5],
  ])
);
console.log(
  mostPoints([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
  ])
);
console.log(
  mostPoints([
    [21, 5],
    [92, 3],
    [74, 2],
    [39, 4],
    [58, 2],
    [5, 5],
    [49, 4],
    [65, 3],
  ])
);
