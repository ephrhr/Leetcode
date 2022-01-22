var letterCasePermutation = function (s) {
  const queue = [s];
  for (let i = 0; i < s.length; i++) {
    if (/[0-9]/.test(s[i])) continue;
    let size = queue.length;
    for (let j = 0; j < size; j++) {
      const node = queue.shift();
      queue.push(node.slice(0, i) + node[i].toLowerCase() + node.slice(i + 1));
      queue.push(node.slice(0, i) + node[i].toUpperCase() + node.slice(i + 1));
    }
  }
  console.log(queue);
  return queue;
};

letterCasePermutation("a1b2");
