var searchInsert = function (nums, target) {
  if (target > nums[nums.length - 1] || target < nums[0])
    return target > nums[nums.length - 1] ? nums.length : 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 4));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));
