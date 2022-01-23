var countElements = function (nums) {
  let result = 0;
  let min = Infinity;
  let max = -Infinity;
  for (let n of nums) {
    min = Math.min(min, n);
    max = Math.max(max, n);
  }
  for (let n of nums) if (n != min && n != max) result++;
  return result;
};

countElements([7, 7, 2, 15]);
