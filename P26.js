var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) k++;
    else nums[i - k] = nums[i];
  }
  return nums.length - k;
};

console.log(removeDuplicates([1, 1, 2, 3, 5, 5, 7, 8, 8]));

/*
        v    
    [1, 1, 2, 3, 5, 5, 7, 8, 8] k=1
           v
    [1, 2, 2, 3, 5, 5, 7, 8, 8]
              v
    [1, 2, 3, 3, 5, 5, 7, 8, 8]
                 v
    [1, 2, 3, 5, 5, 5, 7, 8, 8]
                    v
    [1, 2, 3, 5, 5, 5, 7, 8, 8] k=2
                       v
    [1, 2, 3, 5, 7, 5, 7, 8, 8]
                          v
    [1, 2, 3, 5, 7, 8, 7, 8, 8]
                             v
    [1, 2, 3, 5, 7, 8, 7, 8, 8] k=3
*/
