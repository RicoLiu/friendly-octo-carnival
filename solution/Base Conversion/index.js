function convert(input, source, target) {
    let decimal = 0;
    let res = '';
    //将input转化为10进制
    for (let j = 0; j < input.length; j++) {
        decimal += source.indexOf(input[j]) * Math.pow(source.length, input.length - 1 - j);
    }
    if (decimal == 0) {
        return target[0];
    }
    //由10进制转化为目标进制
    while (decimal > 0) {
        res += target[decimal % target.length];
        decimal = Math.floor(decimal / target.length);
    }
    return res.split('').reverse().join('');
}