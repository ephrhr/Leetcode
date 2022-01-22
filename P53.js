//Kadane's Algorithm (DP)
// var maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum = Math.max(sum + nums[i], nums[i]);
//     maxSum = Math.max(sum, maxSum);
//   }
//   return maxSum;
// };

//Kadane's Algorithm (DP) shorter one
// var maxSubArray = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//   }
//   return Math.max(...nums);
// };

//DAC
var maxSubArray = function (nums) {
  // BASE CASES:
  // if there is only one arr item, then you can simply return that value
  /* if there isn't an arr item, then return -Infinity (we need a valid number for the calculations below. 
  Since JS can only store numbers > -Infinity, -Infinity will never be the max) */
  if (nums.length <= 1) return nums.length ? nums[0] : -Infinity;
  // Declare zero-indexed length and midpoint
  let r = nums.length - 1;
  let mid = Math.floor(r / 2);
  // DIVIDE: Recursively find max sum in the left and right sub arrays
  let lMaxSum = maxSubArray(nums.slice(0, mid));
  let rMaxSum = maxSubArray(nums.slice(mid + 1, r + 1));
  /* MERGE: The divide step gave use the max sum on the left and right side, but we still need to account
  for the possibility of a contiguous array that goes from left to right through the midpoint */

  // Declare variables to record the maximum contiguous sums for each side
  let lMaxContiguousSum = 0;
  let rMaxContiguousSum = 0;

  // On the left side, find sum of contiguous array and keep an updated record of the maximum
  /* (NOTE: in order to account for contiguous arrays that traverse the midpoint, start the search from
  the midpoint - 1 index and traverse leftwards towards index 0. This directionality guarantees that
  a contiguous array traversing the midpoint will be able to add the midpoint itself and the right side's
  contiguous arr [this is exactly what is checked in the final return statement below]) */
  for (let i = mid - 1, currContiguousSum = 0; i >= 0; i--) {
    currContiguousSum += nums[i];
    lMaxContiguousSum = Math.max(lMaxContiguousSum, currContiguousSum);
  }
  // On the left side, find sum of contiguous array and keep an updated record of the maximum
  /* (NOTE: in accordance with the last note, to account for sub arrays that traverse the midpoint, 
  start the search from the midpoint + 1 index and traverse rightwards */
  for (let i = mid + 1, currContiguousSum = 0; i <= r; i++) {
    currContiguousSum += nums[i];
    rMaxContiguousSum = Math.max(rMaxContiguousSum, currContiguousSum);
  }
  /* RETURN the max sum from the current array: either from the left side, right side, or a contiguous
  sub arrary traversing from left to right through the midpoint */
  return Math.max(
    lMaxContiguousSum + nums[mid] + rMaxContiguousSum,
    lMaxSum,
    rMaxSum
  );
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -1, -3]));
