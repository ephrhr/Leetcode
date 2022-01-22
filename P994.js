var orangesRotting = function (grid) {
  let queue = [];
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }
  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length) {
    let cur = [];
    while (queue.length) {
      let pos = queue.shift();
      for (let d of dir) {
        let next = [pos[0] + d[0], pos[1] + d[1]];
        if (
          next[0] > -1 &&
          next[0] < grid.length &&
          next[1] > -1 &&
          next[1] < grid[0].length &&
          grid[next[0]][next[1]] === 1
        ) {
          grid[next[0]][next[1]] = 2;
          cur.push(next);
        }
      }
    }
    if (cur.length) count++;
    queue = cur;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }
  return count;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);
console.log(orangesRotting([[0, 2]]));
