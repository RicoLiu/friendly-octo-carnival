function validBraces(braces) {
  const len = braces.length;
  for (let index = 0; index < (len / 2); index++) {
    braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
  }
  return braces.length === 0;
}

/*******************************/

const isValidStr = (s: string): boolean => {
  if (s === null || s.length === 0) {
    return true;
  }
  if (s.length % 2 === 1) {
    return false;
  }
  let arr: string[] = new Array<string>();
  for (let i = 0; i < arr.length; i++) {
    let char: string = s.charAt(i);
    if (char === '(' || char === '{' || char === '[') {
      arr.push(char);
    } else if (char === ')') {
      if (arr.length === 0 || arr.slice(-1)[0] !== '(') {
        return false;
      }
      arr.pop();
    } else if (char === '}') {
      if (arr.length === 0 || arr.slice(-1)[0] !== '{') {
        return false;
      }
      arr.pop();
    } else if (char === ']') {
      if (arr.length === 0 || arr.slice(-1)[0] !== '[') {
        return false;
      }
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length === 0;
}
