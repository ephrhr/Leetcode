var generate = function (numRows) {
  let result = [];
  let i = 0;
  while (numRows--) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) row[j] = 1;
      else row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(row);
    i++;
  }
  return result;
};

console.log(generate(5));
