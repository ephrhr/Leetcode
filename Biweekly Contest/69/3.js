var longestPalindrome = function (words) {
  let mp = {};
  let max = 0;
  for (let i of words) {
    const revWord = i[1] + i[0];
    //paired
    if (revWord in mp) {
      max += 4;
      mp[revWord]--;
      if (mp[revWord] === 0) delete mp[revWord];
    } else mp[i] = mp[i] ? mp[i] + 1 : 1;
  }
  //check remain unpaired words
  for (let j in mp) {
    if (j[0] === j[1]) {
      max += 2;
      break;
    }
  }
  console.log(mp);
  return max;
};
console.log(longestPalindrome(["cc", "ll", "gg"]));
console.log(longestPalindrome(["lc", "cl", "gg"]));
console.log(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]));
