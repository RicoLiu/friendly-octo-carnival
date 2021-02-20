/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return [parseInt(map[nums[i]]), parseInt(i)];
    } else {
      map[target - nums[i]] = i;
    }
  }
};


// nums = [2, 7, 11, 15], target = 9
function twoSum(nums, target) {
  let m = new Map();
  let another;
  for (let i = 0; i < nums.length; i++) {
    another = target - nums[i];
    if (typeof m[another] === 'number') {
      return [m[another], i];
    }
    m[nums[i]] = i;
  }
  return null;
}
