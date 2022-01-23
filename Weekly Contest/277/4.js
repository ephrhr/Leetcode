//dfs
var maximumGood = function (statements) {
  let n = statements.length;
  let max = 0;
  let carr = new Array(n);
  function check() {
    for (let i = 0; i < n; i++) {
      if (carr[i] === "G") {
        for (let j = 0; j < n; j++) {
          if (
            (statements[i][j] === 0 && carr[j] === "G") ||
            (statements[i][j] === 1 && carr[j] === "B")
          )
            return false;
        }
      }
    }

    return true;
  }
  function dfs(idx) {
    if (idx === n) {
      if (check()) {
        let total = 0;
        for (let i = 0; i < n; i++) {
          if (carr[i] === "G") total++;
        }
        max = Math.max(max, total);
      }
      return;
    }
    carr[idx] = "G";
    dfs(idx + 1);
    carr[idx] = "B";
    dfs(idx + 1);
  }
  dfs(0);
  console.log(max);
  return max;
};

maximumGood([
  [2, 1, 2],
  [1, 2, 2],
  [2, 0, 2],
]);
