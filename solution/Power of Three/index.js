/**
 * @param {number} n
 * @return {boolean}
 * 同样适用于Power of Two & Power of Four
 */
var isPowerOfThree = function(n) {
  if (n <= 0) {
    return false;
  }
  while (n%3 === 0) {
    n /= 3;
  }
  return n === 1;
};
