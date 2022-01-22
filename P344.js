var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    let tmp = s[l];
    s[l++] = s[r];
    s[r--] = tmp;
  }
  console.log(s);
};

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["h", "e", "l", "l", "o", "a"]);
