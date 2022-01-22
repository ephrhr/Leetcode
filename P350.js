var intersect = function (nums1, nums2) {
  let mp1 = new Object();
  for (let i of nums1) {
    mp1[i] = mp1[i] ? mp1[i] + 1 : 1;
  }
  let result = [];
  for (let i of nums2) {
    if (mp1[i]) {
      result.push(i);
      mp1[i]--;
    }
  }
  return result;
};

intersect([1, 2, 2, 1], [2, 2]);
intersect([4, 9, 5], [9, 4, 9, 8, 4]);
