var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));
