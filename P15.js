var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let result = [];
  let sets = [];
  for (let i = 0; i < nums.length - 2; i++) {
    targetFirst = 0 - nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      targetSecond = targetFirst - nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] === targetSecond) {
          let tmp = [nums[i], nums[j], nums[k]];

          result.push(tmp);
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
