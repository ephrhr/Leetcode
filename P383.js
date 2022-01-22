var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
  let mp = new Map();
  for (let c of ransomNote) {
    if (mp.has(c)) mp.set(c, mp.get(c) + 1);
    else mp.set(c, 1);
  }
  for (let c of magazine) {
    if (mp.has(c)) mp.set(c, mp.get(c) - 1);
    if (mp.get(c) === 0) delete mp.delete(c);
  }
  return mp.size ? false : true;
};
console.log(canConstruct("aa", "aba"));
console.log(canConstruct("aa", "abb"));
