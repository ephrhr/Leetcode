var minMoves = function (target, maxDoubles) {
  let move = 0;
  while (target > 1) {
    if (maxDoubles && target % 2 === 0) {
      target /= 2;
      move++;
      maxDoubles--;
    } else if (!maxDoubles) {
      move += target - 1;
      target = 1;
    } else {
      move++;
      target--;
    }
  }
  return move;
};

console.log(minMoves(19, 2));
console.log(minMoves(10, 4));
console.log(minMoves(10000000000, 1));
