var reverseBits = function (n) {
  let result = 0;
  let count = 32;
  while (count--) {
    result <<= 1;
    result |= n & 1;
    n = n >> 1;
  }
  return result >>> 0;
};
