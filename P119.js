var getRow = function (rowIndex) {
  let result = new Array(rowIndex + 1).fill(0);
  result[0] = 1;
  for (let i = 1; i < rowIndex + 1; i++)
    for (let j = i; j >= 1; j--) result[j] += result[j - 1];
  return result;
};

console.log(getRow(5));
