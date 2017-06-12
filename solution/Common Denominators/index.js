var convertFrac = function (lst) {
  //handle lst is empty
  if (lst === []) {
  	return '';
  }
  let temp, result = 1, resultLst = '';
  //减少数组维度 
  //[[1,2], [2,3], [3,4]] => [1,2,2,3,3,4]
  const flatten = arr => arr.reduce(
  	(acc, val) => acc.concat(
    	Array.isArray(val) ? flatten(val) : val
    ),
    []
  );
  //区分下标为奇 偶数组
  const oddArr = flatten(lst).filter((element, index, array) => {
  	return index % 2 !== 0;
  });
  const evenArr = flatten(lst).filter((element, index, array) => {
  	return index % 2 === 0;
  });
  if (oddArr.length === 0 || evenArr.length === 0) {
    return '';
  }
  //求出分母的最小公倍数
  oddArr.reduce((acc, cur, index, array) => {
  	result = lcm(acc, cur);
    return result;
  })
  function lcm(a, b) {
    function gcd(a, b) {
      if (a === 0) {
        return b;
      }
      return gcd(b % a, a);
    }
    return Array.prototype.slice.apply(arguments).reduce((a, b) => {
      return a * b / gcd(a, b);
    }, 1)
  }
  //组合结果
  for (let i = 0; i < oddArr.length; i++) {
  	resultLst += '(' + result / oddArr[i] * evenArr[i]+ ',' + result + ')';
  }
  return resultLst;
}

exports.convertFrac = convertFrac;
