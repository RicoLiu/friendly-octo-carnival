/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  var a;
  var sum = 0;
  num = num.toString();
  for (var i = 0;i < num.length;i++) {
    a = Math.floor(num[i]);
    sum =sum + a;
  }
  return sum < 10 ? sum : addDigits(sum);
};
