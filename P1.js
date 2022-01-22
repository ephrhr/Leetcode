const twoSum = function (nums, target) {
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mp.get(nums[i]) == undefined) {
      mp.set(target - nums[i], i);
    } else {
      return [mp.get(nums[i]), i];
    }
  }
};
