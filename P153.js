var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) l = mid + 1;
    else r = mid;
  }
  return nums[l];
};

console.log(findMin([2, 1]));
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
