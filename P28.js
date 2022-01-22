// var strStr = function (haystack, needle) {
//   if (!needle.length || !haystack.length) return !needle.length ? 0 : -1;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       for (let j = 0; j < needle.length && needle[j] === haystack[i + j]; j++) {
//         if (j === needle.length - 1) return i;
//       }
//     }
//   }
//   return -1;
// };

var strStr = function (haystack, needle) {
  if (!needle.length || !haystack.length) return !needle.length ? 0 : -1;
  let lps = kmpProcess(needle);
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }
    if (j === needle.length) return i - j;
    if (i < haystack.length && haystack[i] !== needle[j])
      j ? (j = lps[j - 1]) : i++;
  }
  return -1;
};

const kmpProcess = function (needle) {
  let lps = [0];
  let i = 1;
  let len = 0;
  while (i < needle.length) {
    if (needle[i] === needle[len]) lps[i++] = ++len;
    else if (len) len = lps[len - 1];
    else lps[i++] = 0;
  }
  return lps;
};

console.log(strStr("mississippi", "pi"));
console.log(strStr("hello wll", "ll"));
console.log(strStr("aaaaaa", "baa"));
console.log(strStr("", "baa"));
console.log(strStr("", ""));
