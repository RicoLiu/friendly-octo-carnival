function primeFactors(n) {
    //your code here
    let arr = [],
        json = {};
    let result = '';
    for (let i = 2; i < n; i++) {
        while (n != i) {
            if (n % i != 0) {
                break;
            }
            arr.push(i);
            n = n / i;
        }
    }
    arr.push(n);
    for (var j = 0, l = arr.length; j < l; j++) {
        json[arr[j]] = (json[arr[j]] + 1) || 1;
    }
    for (let index in json) {
        json[index] === 1 ? result += '(' + index + ')' : result += '(' + index + '**' + json[index] + ')'
    }
    return result;
}