var divideString = function (s, k, fill) {
  let group = [];
  while (s.length > k) {
    let slice = s.slice(0, k);
    s = s.slice(k);
    group.push(slice);
  }
  let fillCount = k - s.length;
  while (fillCount > 0 && fillCount--) s += fill;
  group.push(s);
  return group;
};

divideString("abc", 3, "x");
