var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n <= 0 || n % 2) return false;
  return isPowerOfTwo(n / 2);
};

var isPowerOfTwo = function (n) {
  return n > 0 && !(n & (n - 1));
};
