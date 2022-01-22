var rotate = function (nums, k) {
  k %= nums.length;
  if (!k) return;
  const reverse = function (l = 0, r = nums.length - 1) {
    while (l < r) {
      let tmp = nums[l];
      nums[l++] = nums[r];
      nums[r--] = tmp;
    }
  };
  reverse();
  reverse(0, k - 1);
  reverse(k);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
/*
[7,6,5,4,3,2,1]
[5,6,7,4,3,2,1]
[5,6,7,1,2,3,4]
*/
