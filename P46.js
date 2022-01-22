var permute = function (nums) {
  let result = [];
  function dfs(path, used) {
    if (path.length === nums.length) {
      // make a deep copy since otherwise we'd be append the same list over and over
      result.push(Array.from(path));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // skip used nums
      if (used[i]) continue;
      // add num to permutation, mark num as used
      path.push(nums[i]);
      used[i] = true;
      dfs(path, used);
      // remove num from permutation, mark num as unused
      path.pop();
      used[i] = false;
    }
  }
  dfs([], Array(nums.length).fill(false));
  console.log(result);
  return result;
};

permute([1, 2, 3]);
