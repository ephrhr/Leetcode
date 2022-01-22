var reverseWords = function (s) {
  const reverse = (word) => {
    let revWord = "";
    for (let i = word.length - 1; i >= 0; i--) revWord += word[i];
    return revWord;
  };
  let words = s.split(" ");
  let newStr = "";
  for (let word of words) {
    let revWord = reverse(word);
    newStr += revWord + " ";
  }
  return newStr.slice(0, newStr.length - 1);
};

// var reverseWords = function(s) {
//     return s.split(' ').map(str => str.split('').reverse().join('')).join(' ');
// };

reverseWords("abcde lsajhd, fdhjk");
