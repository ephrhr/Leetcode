var numberOfArrays = function (differences, lower, upper) {
  let hidEle = 0;
  let hid = [hidEle];
  for (let i = 0; i < differences.length; i++) {
    hidEle += differences[i];
    hid.push(hidEle);
  }
  let lowest = Infinity;
  let highest = -Infinity;
  for (let n of hid) {
    lowest = Math.min(lowest, n);
    highest = Math.max(highest, n);
  }
  let range = highest - lowest;
  let possibleRange = upper - lower;
  let result = possibleRange - range + 1;
  return result > 0 ? result : 0;
};

console.log(numberOfArrays([1, -3, 4], 1, 6));
