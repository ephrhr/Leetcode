var searchRange = function (nums, target) {
  if (nums[0] > target || nums[nums.length - 1] < target) return [-1, -1];
  let start = -1;
  let end = -1;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      if (nums[mid - 1] === target) {
        while (nums[mid - 1] === target) mid--;
        start = mid;
        break;
      }
      if (nums[mid + 1] === target) {
        while (nums[mid + 1] === target) mid++;
        end = mid;
        break;
      }
      start = mid;
      end = start;
      break;
    }
    if (nums[mid] > target) r = mid - 1;
    if (nums[mid] < target) l = mid + 1;
  }
  if (start === -1 && end === -1) return [-1, -1];
  if (start !== -1) {
    end = start;
    while (nums[end + 1] === target) end++;
  } else if (end !== -1) {
    start = end;
    while (nums[start - 1] === target) start--;
  }
  return [start, end];
};

console.log(searchRange([1], 1));
