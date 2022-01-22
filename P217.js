// var containsDuplicate = function (nums) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]] === nums[i]) return true;
//     obj[nums[i]] = nums[i];
//   }
//   return false;
// };

// var containsDuplicate = function (nums) {
//   let unique = Array.from(new Set(nums));
//   return nums.length === unique.length ? false : true;
// };

var containsDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 0, 0]));
console.log(containsDuplicate([1, 2, 3, 4]));
