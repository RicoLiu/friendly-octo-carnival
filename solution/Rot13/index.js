function rot13(message) {
    var result = '',
        shifted;
    for (var i in message) {
        var temp = message[i].charCodeAt(0)
        if ((temp >= 65 && temp <= 77) || (temp >= 97 && temp <= 109)) {
            // A~M a~m
            shifted = temp + 13;
        } else if ((temp >= 78 && temp <= 90) || (temp >= 110 && temp <= 122)) {
            // N~Z n~z
            shifted = temp - 13;
        } else {
            shifted = temp;
        }
        result += String.fromCharCode(shifted);
    }
    return result;
}