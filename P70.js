var climbStairs = function (n) {
  if (n < 3) return n;
  let lastStep = 2;
  let lastTwoSteps = 1;
  let totalSteps = lastStep + lastTwoSteps;
  for (let i = 2; i < n; i++) {
    totalSteps = lastStep + lastTwoSteps;
    lastTwoSteps = lastStep;
    lastStep = totalSteps;
  }
  return totalSteps;
};
