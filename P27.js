var removeElement = function (nums, val) {
  if (!nums.length) return 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) k++;
    else nums[i - k] = nums[i];
  }
  console.log(nums);
  return nums.length - k;
};

console.log(removeElement([1, 1, 2, 3, 5, 5, 7, 8, 8], 5));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
