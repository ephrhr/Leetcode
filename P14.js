// const longestCommonPrefix = function (strs) {
//   if (strs.length < 1) return strs[0];
//   let str = "";
//   let max = -1;
//   let tmp = "";
//   let tmpCount = 0;
//   for (let i = 0; i < strs[0].length; i++) {
//     tmp += strs[0][i];
//     tmpCount++;
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[0][i] !== strs[j][i]) {
//         return str;
//       }
//     }
//     if (tmpCount > max) {
//       max = tmpCount;
//       str = tmp;
//     }
//   }
//   return str;
// };

const longestCommonPrefix = function (strs) {
  let n = 0;
  while (true) {
    const val = strs[0].charAt(n);
    if (val && strs.every((cValue) => cValue.charAt(n) == val)) {
      n++;
    } else {
      return strs[0].slice(0, n);
    }
  }
};

console.log(longestCommonPrefix(["flower", "fkow"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
