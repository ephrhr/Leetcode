var highestRankedKItems = function (grid, pricing, start, k) {
  let queue = [start];
  let reachable = [];
  let map = grid;
  let dist = 0;
  while (queue.length) {
    let next = [];
    let dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    dist++;
    while (queue.length) {
      let cur = queue.shift();
      if (
        grid[cur[0]][cur[1]] >= pricing[0] &&
        grid[cur[0]][cur[1]] <= pricing[1]
      )
        reachable.push([cur[0], cur[1], grid[cur[0]][cur[1]], dist]);

      map[cur[0]][cur[1]] = 0;

      for (let d of dir) {
        let nextStep = new Array(2);
        nextStep[0] = d[0] + cur[0];
        nextStep[1] = d[1] + cur[1];
        if (
          nextStep[0] >= 0 &&
          nextStep[1] >= 0 &&
          nextStep[0] < grid.length &&
          nextStep[1] < grid[0].length &&
          map[nextStep[0]][nextStep[1]]
        )
          next.push(nextStep);
      }
    }
    queue = next;
  }
  reachable.sort((s1, s2) => {
    if (s1[3] !== s2[3]) return s1[3] - s2[3];
    if (s1[2] !== s2[2]) return s1[2] - s2[2];
    if (s1[0] !== s2[0]) return s1[0] - s2[0];
    return s1[1] - s2[1];
  });
  reachable = reachable.map((i) => [i[0], i[1]]);
  return reachable.length <= k ? reachable : reachable.slice(0, k);
};
console.log(
  highestRankedKItems(
    [
      [1, 2, 0, 1],
      [1, 3, 0, 1],
      [0, 2, 5, 1],
    ],
    [2, 5],
    [0, 0],
    3
  )
);
console.log(
  highestRankedKItems(
    [
      [1, 2, 0, 1],
      [1, 3, 3, 1],
      [0, 2, 5, 1],
    ],
    [2, 3],
    [2, 3],
    2
  )
);
console.log(
  highestRankedKItems(
    [
      [1, 1, 1],
      [0, 0, 1],
      [2, 3, 4],
    ],
    [2, 3],
    [0, 0],
    3
  )
);
