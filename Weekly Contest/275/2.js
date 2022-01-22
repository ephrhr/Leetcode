var minSwaps = function (nums) {
  let k = 1;
  let isZeroFlag = false;
  for (let i of nums) {
    if (!i) isZeroFlag = true;
    else if (i && isZeroFlag) {
      k++;
      isZeroFlag = false;
    }
  }
};
