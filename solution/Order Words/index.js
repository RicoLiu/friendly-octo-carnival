/**
 * 
 * @param {String} words 
 * @returns 
 */
function order(words) {
    var result = [];
    // handle words is empty
    if (words === '') {
        return '';
    }
    var arr = words.split(' ');
    for (var i = 0; i < arr.length; i++) {
        var orderdNum = arr[i].match(/\d+/g);
        result[orderdNum - 1] = arr[i];
    }
    return result.join(' ');
}


/**
 * 思考：如果将题目要求提升一步，将每个单词中的数字去除，该如何实现？
 * 
 * @param {String} words 
 */
function orderWithoutNum(words) {
    var result = [];
    if (words === '') {
        return '';
    }
    var arr = words.split(' ');
    for (var i = 0; i < arr.length; i++) {
        var index = arr[i].search(/\d+/g);
        var orderdNum = arr[i].match(/\d+/g);
        result[orderdNum - 1] = arr[i].substring(0, index) + arr[i].substring(index + 1, arr[i].length);
    }
    return result.join(' ');
}