// const isValid = function (s) {
//   if (!s.length) {
//     return true;
//   }
//   if (s.length % 2) {
//     return false;
//   }
//   let stk = [];
//   for (let c of s) {
//     if (c === ")") {
//       if (stk[stk.length - 1] !== "(") {
//         return false;
//       } else {
//         stk.pop();
//       }
//     } else if (c === "]") {
//       if (stk[stk.length - 1] !== "[") {
//         return false;
//       } else {
//         stk.pop();
//       }
//     } else if (c === "}") {
//       if (stk[stk.length - 1] !== "{") {
//         return false;
//       } else {
//         stk.pop();
//       }
//     } else if (c === "(" || c === "[" || c === "{") {
//       stk.push(c);
//     }
//   }
//   return !stk.length;
// };

const isValid = function (s) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stk = [];

  for (let i in s) {
    if (obj[s[i]]) {
      stk.push(obj[s[i]]);
    } else if (stk.pop() !== s[i]) {
      return false;
    }
  }
  return !stk.length;
};
console.log(isValid("([])"));
