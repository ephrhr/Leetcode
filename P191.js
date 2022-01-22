//bit operaters

var hammingWeight = function (n) {
  let bits = 0;
  while (n) {
    bits += n & 1;
    n = n >>> 1;
  }
  return bits;
};

//String

// var hammingWeight = function (n) {
//   return n.toString(2).replace(/0/g, "").length;
// };

console.log(hammingWeight(00000000000000000000000000001011));
