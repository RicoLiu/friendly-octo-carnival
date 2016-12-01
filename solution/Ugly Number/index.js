/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  var pNum = num;

  if (num <= 0) {
    return false;
  }

  if (num === 1) {
    return true;
  }

  while (pNum % 5 === 0) {
    pNum /= 5;
  }
  while (pNum % 3 === 0) {
    pNum /= 3;
  }
  while (pNum % 2 === 0) {
    pNum /= 2;
  }
  return pNum === 1;
};