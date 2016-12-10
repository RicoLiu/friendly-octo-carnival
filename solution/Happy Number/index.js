/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var a;
  var next = 0;
  if (n === 1 || n === 7) return true;
  if (n < 10)  return false;
  n = n.toString();
  for (var i in n) {
    a = Math.floor(n[i]);
    next += a * a;
  }
  return isHappy(next);
};