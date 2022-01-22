// var search = function (nums, target) {
//   let l = 0;
//   let r = nums.length - 1;
//   //find rotation point
//   //O(log(n))
//   while (l < r) {
//     let mid = Math.floor((l + r) / 2);
//     if (nums[mid] > nums[r]) l = mid + 1;
//     else r = mid;
//   }
//   let k = l;
//   (l = 0), (r = nums.length - 1);
//   //find target in nums
//   //O(log(n))
//   while (l <= r) {
//     let mid = Math.floor((l + r) / 2);
//     let realMid = (mid + k) % nums.length;
//     if (target === nums[realMid]) return realMid;
//     if (target > nums[realMid]) l = mid + 1;
//     else r = mid - 1;
//   }
//   return -1;
// };

var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (target === nums[mid]) return mid;
    //if l < rotation point < mid
    if (nums[mid] < nums[l]) {
      if (target > nums[mid] && target <= nums[r]) l = mid + 1;
      else r = mid - 1;
    } else {
      if (target < nums[mid] && target >= nums[l]) r = mid - 1;
      else l = mid + 1;
    }
  }
  if (target === nums[mid]) return mid;
  return -1;
};
