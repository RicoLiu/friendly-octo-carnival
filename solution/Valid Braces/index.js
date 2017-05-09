function validBraces(braces) {
  const len = braces.length;
  for (let index = 0; index < (len / 2); index++) {
    braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
  }
  return braces.length === 0;
}