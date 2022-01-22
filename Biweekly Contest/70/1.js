var minimumCost = function (cost) {
  let price = 0;
  cost.sort((a, b) => a - b);
  console.log(cost);
  while (cost.length) {
    price += cost.pop();
    if (!cost.length) break;
    price += cost.pop();
    if (!cost.length) break;
    cost.pop();
  }
  console.log(price);
  return price;
};

minimumCost([6, 5, 7, 9, 2, 2]);
minimumCost([3, 1, 9, 1, 6, 10, 9, 8]);
