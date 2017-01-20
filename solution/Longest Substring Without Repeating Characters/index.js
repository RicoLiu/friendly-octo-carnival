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
