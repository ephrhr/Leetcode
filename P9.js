//covert to string

// const isPalindrome = function (x) {
//   //if negative return false
//   if (x < 0) return false;
//   //covert to string
//   x = x.toString();
//   //length == 2 edge case
//   if (x.length === 2 && x[left] !== x[right]) {
//     return false;
//   } else if (x.length === 2 && x[left] === x[right]) return true;
//   //normal case
//   //define left, mid and right index
//   let midF = x.length / 2;
//   let mid = parseInt(midF);
//   let left = 0;
//   let right = x.length - 1;
//   //cases divided by length is odd and even
//   //compare each index number
//   if (mid % 2 === 1) {
//     mid--;
//     for (; left < mid, right > mid; ) {
//       if (x[left] === x[right]) {
//         left++;
//         right--;
//       } else return false;
//     }
//   } else {
//     for (; left < mid; ) {
//       if (x[left] === x[right]) {
//         left++;
//         right--;
//       } else return false;
//     }
//   }
//   return true;
// };

//covert to string 2.0

const isPalindrome = function (x) {
  //if negative return false
  if (x < 0) return false;
  //covert to string
  x = x.toString();
  //defined left from 0
  //        mid = Math.floor(x.length / 2)
  //        right = x.length - 1 - left
  for (let left = 0; left <= Math.floor(x.length / 2) - 1; left++)
    if (x[left] != x[x.length - 1 - left]) return false;
  return true;
};

//not to covert to string

// const isPalindrome = function (x) {
//   //if negative return false or x == *****0
//   if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
//   //compare each index number
//   let left = 0;
//   while (x > left) {
//     left = left * 10 + (x % 10);
//     x = Math.floor((x /= 10));
//   }
//   return x == left || x == Math.floor((left /= 10));
// };

console.log(isPalindrome(1221));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1337));
console.log(isPalindrome(1000030001));
