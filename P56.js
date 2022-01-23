var merge = function (intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let [s, e] of intervals) {
    if (s <= result[result.length - 1][1])
      result[result.length - 1][1] = Math.max(e, result[result.length - 1][1]);
    else result.push([s, e]);
  }
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
