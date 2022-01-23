// var sortColors = function (nums) {
//   let zero = 0;
//   let one = 0;
//   let two = 0;
//   while (nums.length) {
//     let n = nums.pop();
//     if (n === 0) zero++;
//     else if (n === 1) one++;
//     else two++;
//   }
//   while (zero--) nums.push(0);
//   while (one--) nums.push(1);
//   while (two--) nums.push(2);
//   console.log(nums);
// };

var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      swap(mid, high);
      high--;
    }
  }
  function swap(a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }
  console.log(nums);
};

sortColors([2, 0, 2, 1, 1, 0]);
