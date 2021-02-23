/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum (nums) {
  let res = [];
  const len = nums.length;
  if (nums === null || len < 3) return res;
  // 数组进行排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    // 排序后，当前值大于0时跳出循环
    if (nums[i] > 0) break;
    // 去重操作
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]]);
        // 去重
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      }
      else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }

  return res;
}
