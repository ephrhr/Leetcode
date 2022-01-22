// var lengthOfLongestSubstring = function (s) {
//   let maxLength = 0;
//   let l = 0;
//   let r = l;
//   let mp = new Object();
//   while (r < s.length) {
//     if (mp[s[r]] >= 0) {
//       maxLength = Math.max(maxLength, r - l);
//       l = mp[s[r]] + 1;
//       r = l;
//       mp = {};
//       mp[s[r]] = r;
//     } else mp[s[r]] = r;
//     r++;
//   }
//   maxLength = Math.max(maxLength, r - l);
//   console.log(maxLength);
//   return maxLength;
// };

var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let mp = new Map();
  for (let l = 0, r = l; r < s.length; r++) {
    if (mp.has(s[r])) l = Math.max(l, mp.get(s[r]));
    maxLength = Math.max(maxLength, r - l + 1);
    mp.set(s[r], r + 1);
  }
  console.log(maxLength);
  return maxLength;
};
lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("abcbeda");
lengthOfLongestSubstring("nnnnnnn");
lengthOfLongestSubstring("pwwkew");
