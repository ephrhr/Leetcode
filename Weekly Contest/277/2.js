var rearrangeArray = function (nums) {
  let postiveNums = [];
  let negativeNums = [];
  let ans = [];
  for (let n of nums) {
    if (n > 0) postiveNums.push(n);
    else negativeNums.push(n);
  }
  for (let i = 0; i < negativeNums.length; i++) {
    ans.push(postiveNums[i]);
    ans.push(negativeNums[i]);
  }
  console.log(ans);
  return ans;
};

rearrangeArray([3, 1, -2, -5, 2, -4]);
