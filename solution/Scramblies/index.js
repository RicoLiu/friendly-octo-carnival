function scramble(str1, str2) {
    //code me
    var json1 = {},
        json2 = {};
    //分别计算字符串1和字符串2中字符出现的次数
    for (var i = 0, l = str2.length; i < l; i++) {
        json2[str2[i]] = (json2[str2[i]] + 1) || 1;
    }
    for (var k = 0, len = str1.length; k < len; k++) {
        json1[str1[k]] = (json1[str1[k]] + 1) || 1;
    }
    //如果str2种字符出现次数大于str1，则返回false
    for (var j in json2) {
        if (json2[j] > json1[j]) {
            return false;
        }
    }
    //对str2种每一个字符都去验证是否存在于str1中
    return str2.split('').every(_ => {
        return str1.indexOf(_) !== -1;
    })
}