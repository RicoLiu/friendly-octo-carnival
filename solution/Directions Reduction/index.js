function dirReduc(arr) {
  var dirReducEnum = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
  }
  while (true) {
    var dirReducResult = [];
    var i = 0,
      len = arr.length;
    while (i < len - 1) {
      if (dirReducEnum[arr[i]] === arr[i + 1]) {
        i += 2;
      } else {
        dirReducResult.push(arr[i]);
        i += 1;
      }
    }
    if (i < len) {
      dirReducResult.push(arr[i]);
      i += 1;
    }
    if (arr.length === dirReducResult.length) {
      arr = dirReducResult;
      break;
    }
    arr = dirReducResult;
  }
  return arr;
}


/**
 * 先将数组转化为字符串，然后将不符合的模式替换，最后将字符串转换为数组
 * 这个解法真的是短小又精悍。。。
 * 
 * @param {Array} arr 
 * @returns 
 */
function dirReduc(arr) {
  var str = arr.join('');
  var pattern = /NORTHSOUTH|SOUTHNORTH|WESTEAST|EASTWEST/;
  while (pattern.test(str)) {
    str = str.replace(pattern, '');
  }
  return str.match(/NORTH|SOUTH|EAST|WEST/g) || [];
}