//T.C: O(nlog(n))
//S.C: O(1)
// var findLonely = function (nums) {
//   nums.sort((a, b) => a - b);
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i + 1] === nums[i] + 1 || nums[i + 1] === nums[i]) i = i + 1;
//     else if (i > 0 && (nums[i] === nums[i - 1] || nums[i] - 1 === nums[i - 1]))
//       continue;
//     else result.push(nums[i]);
//   }
//   console.log(nums);
//   console.log(result);
//   return result;
// };

//T.C: O(n)
//S.C: O(n)
// var findLonely = function (nums) {
//   let result = [];
//   let setOfUniqueNums = new Set();
//   let numSet = new Set(nums);
//   let map = new Map();
//   for (let n of nums) map[n] = map[n] ? map[n] + 1 : 1;
//   //filter out duplicated number in nums
//   for (let n of nums) if (map[n] < 2) setOfUniqueNums.add(n);
//   setOfUniqueNums.forEach((n) => {
//     //filter out number which has adjacent numbers
//     if (!numSet.has(n + 1) && !numSet.has(n - 1)) result.push(n);
//   });
//   console.log(result);
//   return result;
// };

var findLonely = function (nums) {
  let map = new Map();
  let set = new Set();
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
    set.add(n);
  }
  let result = [];
  for (let [n, count] of map) {
    if (count === 1) if (!set.has(n - 1) && !set.has(n + 1)) result.push(n);
  }
  console.log(result);
  return result;
};

findLonely([10, 6, 5, 8]);
findLonely([1, 3, 5, 3, 3]);
findLonely([
  75, 35, 59, 66, 69, 53, 37, 16, 60, 98, 11, 33, 3, 85, 59, 65, 59, 44, 34, 89,
  72, 47,
]);
