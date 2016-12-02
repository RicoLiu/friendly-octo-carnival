/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  var str = '';
  for (var i = 1; i <= s.length; i++) {
    str = str.concat(s.charAt(s.length - i));
  }
  return str;
};
