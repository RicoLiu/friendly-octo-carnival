/**
 * 
 * 
 * @param {string} numbers 
 * @returns 
 */
function iqTest(numbers){
  var num = numbers.split(' ');
  var even = 0, odd = 0;
  num.map(_ => {
    if (_ % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  })
  return even > odd ? num.findIndex((element, index, array) => {
    if (element % 2 === 1) {
      return true;
    }
  }) + 1 : num.findIndex((element, index, array) => {
    if (element % 2 === 0) {
      return true;
    }
  }) + 1;
}