//T.C: O(m+n)
var searchMatrix = function (matrix, target) {
  let targetCol = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === target) return true;
    else if (matrix[i][0] < target) targetCol = i;
  }
  for (let j = 0; j < matrix[0].length; j++)
    if (matrix[targetCol][j] === target) return true;
  return false;
};

//T.C:O(log(mn))
var searchMatrix = function (matrix, target) {
  let l = 0;
  let r = matrix.length * matrix[0].length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let midEle =
      matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];
    if (target === midEle) return true;
    else if (target < midEle) r = mid - 1;
    else l = mid + 1;
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
