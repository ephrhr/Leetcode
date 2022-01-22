var merge = function (nums1, m, nums2, n) {
  let i = nums1.length - 1;
  m--;
  n--;
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) nums1[i--] = nums1[m--];
    else nums1[i--] = nums2[n--];
  }
  while (n >= 0) nums1[i--] = nums2[n--];
  console.log(nums1);
};

merge([0], 0, [1], 1);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
