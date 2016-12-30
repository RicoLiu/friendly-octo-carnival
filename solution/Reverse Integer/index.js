/**
 * @param {number} x
 * @return {number}
 * 转化为字符串，通过下表访问
 */
var reverse = function(x) {
  var flag = x > 0 ? 1 : -1;
  x = Math.abs(x);
  x += '';
  var res = 0;
  var t = 1;
  for (var i = 0;i < x.length;i++) {
    res = res + (x.charCodeAt(i) - 48) * t;
    t *= 10;
  }
  if (res > 2147483647) {
    return 0;
  }
  return res * flag;
};
