var singleNumber = function (nums) {
  let result = 0;
  for (let n of nums) result ^= n;
  return result;
};

singleNumber([2, 2, 1]);
