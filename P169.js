//Boyer-Moore Majority Vote Algorithm
//T.C: O(n)
//S.C: O(1)
var majorityElement = function (nums) {
  let count = 0;
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    count = nums[idx] === nums[i] ? count + 1 : count - 1;
    if (count <= 0) {
      idx = i;
      count = 1;
    }
  }
  return nums[idx];
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
