var updateMatrix = function (mat) {
  let queue = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) queue.push([i, j, 0]);
      else mat[i][j] = Infinity;
    }
  }
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while (queue.length) {
    let pos = queue.shift();
    if (mat[pos[0]][pos[1]] > pos[2]) mat[pos[0]][pos[1]] = pos[2];
    //check for each neighbor pos.
    //If they on the board and not visited yet, add to the queue, with increased "level" param at pos[2].
    for (let d of dir) {
      let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];
      if (
        next[0] > -1 &&
        next[0] < mat.length &&
        next[1] > -1 &&
        next[1] < mat[0].length &&
        mat[next[0]][next[1]] === Infinity
      )
        queue.push(next);
    }
  }
  console.log(mat);
  return mat;
};

updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]);
