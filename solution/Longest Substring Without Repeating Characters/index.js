/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  var map = new Map();//使用Map数据结构来存储键值对
  var max = 0;
  for (var i = 0,j = 0; i < s.length; ++i) {
    if (map.has(s.charAt(i))) {
      j = Math.max(j, map.get(s.charAt(i)) + 1);
    }
    map.set(s.charAt(i), i);
    max = Math.max(max, i-j+1);
  }
  return max;
};



function lengthOfLongestSubstring(str) {
  if (str.length === 0) {
    return 0;
  }

  // 判断滑动窗口中是否有重复字符
  let freq = new Array(256).fill(0);
  let result = 0, left = 0, right = -1;
  while (left < str.length) {

    if (right + 1 < str.length && freq[str.charCodeAt(right + 1) - 'a'.charCodeAt(0)] === 0) {
      // 增加滑动窗口右边界
      freq[str.charCodeAt(right + 1) - 'a'.charCodeAt(0)]++;
      right++;
    } else {
      // 有重复字符，增加滑动窗口左边界
      freq[str.charCodeAt(left) - 'a'.charCodeAt(0)]--;
      left++
    }
    result = Math.max(result, right - left + 1);
  }

  return result;
 }
