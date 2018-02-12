function solution(number) {
    // convert the number to a roman numeral
    const map = [1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC',
        50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I',];
    let value = '';
    for (let idx = 0; number > 0 && idx < map.length; idx += 2) {
        while (number >= map[idx]) {
            value += map[idx + 1];
            number -= map[idx];
        }
    }
    return value;
}
