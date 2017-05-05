/**
 * 所有测试用例通过，运行时间超出。。。
 * 待优化
 * @param {integer} g 
 * @param {integer} m 
 * @param {integer} n 
 * @returns 
 */
function gap(g, m, n) {
    let arr = [];
    //将所有偶数剔除，不添加至数组中
    if (m % 2 === 0) {
        m = m + 1;
        while (m <= n) {
            arr.push(m);
            m += 2;
        }
    } else {
        while (m <= n) {
            arr.push(m);
            m += 2;
        }
    }
    //过滤所有素数
    arr = arr.filter((element, index, array) => {
        let start = 2;
        while (start <= Math.sqrt(element)) {
            if (element % start++ < 1) {
                return false;
            }
        }
        return element > 1;
    });
    //找到符合条件的组合
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + g === arr[i + 1]) {
            return [arr[i], arr[i + 1]];
        }
    }
    return null;
}


/**
 * 上网搜了下，被这个解法震撼了，效率高的惊人
 * 链接：https://codereview.stackexchange.com/questions/153288/codewars-gap-in-primes
 * @param {any} gap 
 * @param {any} start 
 * @param {any} end 
 * @returns 
 */
function gap(gap, start, end) {
  //cut off odd gaps
  //bitwise AND can test least significant bit
  //odd numbers have 1, even have 0
  if (gap & 1) { //is it odd?
    if (start > 2 || end < gap + 2) return null; //check if 2 is in range
    return isPrime(gap + 2) ? [2, gap + 2] : null; //check additionally the other part
  }
  var previous = null; //no initial value
  //loop over odd numbers to check for primes
  for (var current = start | 1; //set last bit to 1: /odd numbers stay same, even numbers become next odd
       current <= end;
       current += 2 // skip any even number
      ) {
    if (isPrime(current)) {
      if (current - previous === gap) //is it a match?
        return [previous, current];
      //no need for "else" here as the other branch has "return"
      previous = current; // anyway, save it
    }
  }

  return null; //no early return from loop = nothing matches

  
  /**
    Tests if n is prime
  */
  function isPrime(n) {
    if (n <= 6) //cut away small primes explicitly
      return n === 2 || n === 3 || n === 5;
    //cut away small divisors (2 and 3) explicitly
    if (n & 1 === 0 || //using bitwise AND for even numbers
    n % 3 === 0) return false;
    
    var limit = Math.floor(Math.sqrt(n)); //precalculate loop limit
    // loop is checking every divisor using 6k ± 1 pattern
    for (var t = 5; //start with 5, first 6k - 1 number
         t <= limit;
         t += 6 //step by 6
        ) {
      if (n % t === 0 || //6k - 1
          n % (t + 2) === 0) //6k + 1
        return false;
    }
    return true;
  }
}
