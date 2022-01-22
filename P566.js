var matrixReshape = function (mat, r, c) {
  let flat = mat.flat();
  if (flat.length !== r * c) return mat;
  return [...Array(r)].map(() => flat.splice(0, c));
};
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
);
