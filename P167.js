var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];
    else numbers[l] + numbers[r] > target ? r-- : l++;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4, 11, 15], 6));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([2, 3], 5));
