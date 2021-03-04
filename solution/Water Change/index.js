/**
 * @param {Number} 空气水瓶
 * @return {Number} 最多可换多少瓶汽水喝
 */
function max_bottle(input) {
  let res = 0;
  while (input != 0) {
    res += Math.floor(input / 3);
    input = Math.floor(input / 3) + input % 3;
    if (input == 2) {
      input++;
    } else if (input == 1) {
      break;
    }
  }
  return res;
}
