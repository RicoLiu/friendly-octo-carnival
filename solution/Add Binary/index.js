/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  //ensure a.length > b.length
  if (a.length < b.length) {
    var tmp = a;
    a = b;
    b = tmp;
  }

  var res = "";
  var carry = 0;
  for (var i = 1; i <= a.length; i++) {
    var _a = parseInt(a[a.length - i]);
    var _b = parseInt(b[b.length - i]) || 0;
    var add = _a + _b + carry;
    switch (add) {
      case 3:
        res = "1" + res;
        carry = 1;
        break;
      case 2:
        res = "0" + res;
        carry = 1;
        break;
      default:
        res = add + res;
        carry = 0;
        break;
    }
  }

  if (carry === 1) {
    res = "1" + res;
  }
  return res;
};
