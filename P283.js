// var moveZeroes = function (nums) {
//   const swap = (i, j) => {
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//   };
//   let k = 0;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       for (let j = i; j < nums.length - k - 1; j++) swap(j, j + 1);
//       k++;
//     }
//   }
//   console.log(nums);
// };
var moveZeroes = function (nums) {
  for (let c = 0, i = 0; i < nums.length; i++) {
    if (c === i && nums[i]) c++;
    else if (nums[i]) {
      nums[c++] = nums[i];
      nums[i] = 0;
    }
  }
  console.log(nums);
};

moveZeroes([0, 0, 1, 2, 3]);
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
moveZeroes([0, 0, 1]);

/*
     Y
    [0, 1, 0, 3, 12]
     v  Y  
    [0, 1, 0, 3, 12]
        v  Y
    [1, 0, 0, 3, 12]
        v     Y
    [1, 0, 0, 3, 12]
           v      Y
    [1, 3, 0, 0, 12]
               v     Y
    [1, 3, 12, 0, 0]
*/
