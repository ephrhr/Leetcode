// var firstUniqChar = function (s) {
//   let mp = new Map();
//   for (let c of s) {
//     if (mp.has(c)) mp.set(c, mp.get(c) + 1);
//     else mp.set(c, 1);
//   }
//   for (let i = 0; i < s.length; i++) if (mp.get(s[i]) === 1) return i;
//   return -1;
// };

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++)
    if (s.indexOf(s[i]) === i && s.indexOf(s[i], i + 1) === -1) return i;
  return -1;
};

console.log(firstUniqChar("ababba"));
