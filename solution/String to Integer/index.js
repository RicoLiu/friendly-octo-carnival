
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if (parseInt(str) > Math.pow(2,31) - 1) {
    return Math.pow(2,31) - 1;
  } else if (parseInt(str) < -1 * Math.pow(2,31)) {
    return -1 * Math.pow(2,31);
  }
  return isNaN(parseInt(str)) ? 0: parseInt(str);
};