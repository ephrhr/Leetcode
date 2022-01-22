//DP
var rob = function (nums) {
  let dp = [];
  function findHouses(dp, idx) {
    if (idx >= nums.length) return 0;
    if (dp[idx] === undefined) {
      const skipHouse = findHouses(dp, idx + 1);
      const robHouse = nums[idx] + findHouses(dp, idx + 2);
      dp[idx] = Math.max(skipHouse, robHouse);
    }
    return dp[idx];
  }
  console.log(findHouses(dp, 0));
  return findHouses(dp, 0);
};

// var rob = function (nums) {
//   return nums.reduce(
//     function (dp, n) {
//       return [dp[1], Math.max(dp[0] + n, dp[1])];
//     },
//     [0, 0]
//   )[1];
// };
rob([1, 2, 3, 1]);
rob([2, 7, 9, 3, 1]);
