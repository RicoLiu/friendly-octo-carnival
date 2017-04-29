function disemvowel(str) {
    if (str === '') {
        return '';
    }
    return str.replace(/aeiou/gi, '');
}