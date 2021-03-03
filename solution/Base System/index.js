/**
 * 十六进制 to 十进制
 * @params String
 * @returns String
 */
function convert(str) {
  if (!str) return '';
  let len = str.length;
  let res = 0;// 返回结果
  let pow = 0;// 幂运算
  let map = {
    'A': '10',
    'B': '11',
    'C': '12',
    'D': '13',
    'E': '14',
    'F': '15',
  }
  for (let i = len - 1; i >= 0; i--) {
    let temp;
    if (map[str[i].toUpperCase()]) {
      temp = map[str[i].toUpperCase()];
    }
    res += temp ? Number(temp) * Math.pow(16, pow) : Number(str[i]) * Math.pow(16, pow);
    pow++;
  }
  return res.toString();
}
