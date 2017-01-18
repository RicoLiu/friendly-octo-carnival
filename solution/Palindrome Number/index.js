/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  //将数字转化为字符串，遍历得到反序输出结果
  var res = 0,base = 1;
  if (x < 0 || x > Math.pow(2,31)) {
    return false;
  }
  x = x + "";
  for (var i = 0; i < x.length; i++) {
    res += base * parseInt(x[i]);
    base *= 10;
  }
  if (res > Math.pow(2,31) || res !== parseInt(x)) {
    return false;
  } else if (res === parseInt(x)) {
    return true;
  }
};


var isPalindrome = function(x) {
  if (x < 0) {
    return false;//负数肯定不是,直接返回
  }
  if (x >= 0 && x < 10) {
    return true;//0-9肯定是,直接返回
  }

  //正数情况
  var str = x + "";

  var count = 0;
  var i = 0, j = str.length - 1;
  while(count < str.length / 2) { //回文数,只需要匹配两边的就可以了. 奇数位数时,除去中间匹配两边.
    if(str.charAt(i) == str.charAt(j)) {
      count++;
      i++;
      j--;
    } else {
      return false; //一旦发现不匹配立马返回false
    }
  }
  return true;
};