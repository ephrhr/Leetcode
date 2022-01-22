var maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  let max = 0;
  let tmp = 0;
  let minIndex = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[minIndex]) minIndex = i;
    tmp = prices[i] - prices[minIndex];
    if (tmp > max) {
      max = tmp;
      maxIndex = i + 1;
    }
  }
  return max;
};
//minIndex >= maxIndex ? 0 : prices[maxIndex] - prices[minIndex];

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit([7, 4, 1, 2]));
