/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 */
var intersection = function(nums1, nums2) {
  var st1 = new Set();
  for (var number of nums1) {
    st1.add(number);
  }
  var st2 = new Set();
  for (var i of nums2) {
    st2.add(i);
  }
  var res = [];
  for (var j of st1) {
    if (st2.has(j))
      res.push(j);
  }
  return res;
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 */
var intersect = function(nums1, nums2) {
  var i = 0, j = 0, arr = [];
  //array sort
  //function sortNumber(arg1, arg2) {
  //  return arg1 - arg2;
  //}
  //nums1 = nums1.sort(sortNumber);
  //nums2 = nums2.sort(sortNumber);
  nums1 = nums1.sort((arg1, arg2) => arg1 - arg2);
  nums2 = nums2.sort((arg1, arg2) => arg1 - arg2);
  if (nums1 === [] || nums2 === []) {
    return arr;
  }
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      ++i;
    } else if (nums1[i] > nums2[j]) {
      ++j;
    } else {
      arr.push(nums1[i]);
      ++i;
      ++j;
    }
  }
  return arr;
};