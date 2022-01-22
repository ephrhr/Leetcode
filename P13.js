const romanToInt = function (str) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let val = 0;
  for (let i = 0; i < str.length; i++) {
    if (roman[str[i]] < roman[str[i + 1]] && i + 1 < str.length) {
      val -= roman[str[i]];
    } else {
      val += roman[str[i]];
    }
  }
  return val;
};

console.log(romanToInt("MCMXCIV"));
