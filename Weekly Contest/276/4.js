//greedy with reverse sort
var maxRunTime = function (n, batteries) {
  batteries.sort((x, y) => y - x);
  let sum = batteries.reduce((x, y) => x + y);
  for (let battery of batteries) {
    if (sum >= battery * n) return parseInt(sum / n);
    else {
      n--;
      sum -= battery;
    }
  }
};
//binary search
const maxRunTime = (n, a) => {
  let low = 0,
    high = 1e14;
  while (low <= high) {
    let mid = parseInt((low + high) / 2),
      sum = 0; // hint: don't use  mid = low + high >> 1 (bit manipulation in js can be max 10^9, otherwise will be wrong, normal math can be max 10 ^ 15)
    for (const x of a) sum += Math.min(x, mid);
    if (sum >= n * mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
};
