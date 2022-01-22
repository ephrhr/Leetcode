var checkInclusion = function (s1, s2) {
  if (!s1.length || !s2.length) return false;
  let mp = new Map();
  for (let c of s1) {
    if (mp.has(c)) mp.set(c, mp.get(c) + 1);
    else mp.set(c, 1);
  }
  let counter = mp.size;
  for (let r = 0, l = 0; r < s2.length; r++) {
    if (mp.has(s2[r])) mp.set(s2[r], mp.get(s2[r]) - 1);
    if (mp.get(s2[r]) === 0) counter--;
    while (!counter) {
      if (r - l + 1 === s1.length) return true;
      if (mp.has(s2[l])) mp.set(s2[l], mp.get(s2[l]) + 1);
      if (mp.get(s2[l]) === 1) counter++;
      l++;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("ab", "eidbaooo"));
