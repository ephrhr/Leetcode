// var combine = function (n, k) {
//   let result = [];
//   function traverse(arr, depth) {
//     if (arr.length === k) {
//       result.push(arr);
//       return;
//     }
//     if (depth > n) return;
//     traverse(arr, depth + 1);
//     traverse(arr.concat(depth), depth + 1);
//   }
//   traverse([], 1);
//   console.log(result);
//   return result;
// };

//DFS
var combine = function (n, k) {
  let result = [];
  function dfs(start, arr) {
    if (arr.length === k) {
      result.push([...arr]);
      return;
    }
    for (let i = start; i <= n; i++) {
      arr.push(i);
      dfs(i + 1, arr);
      console.log(arr);
      arr.pop();
    }
    return;
  }
  dfs(1, []);
  console.log(result);
  return result;
};

combine(4, 2);
