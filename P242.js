var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let mp = new Map();
  for (let c of s) mp.set(c, (mp.get(c) || 0) + 1);
  for (let c of t) {
    if (!mp.has(c)) return false;
    mp.set(c, mp.get(c) - 1);
    if (mp.get(c) === 0) mp.delete(c);
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
