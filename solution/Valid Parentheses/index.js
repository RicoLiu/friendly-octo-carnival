/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let len = 0;
  while (len !== s.length) {
    len = s.length;
    s = s.replace('()', '').replace('[]', ''),replace('{}', '');
  }
  return s.length === 0;
};


// JavaScript solution with a stack
// from discuss
const map = {
  "(": ")",
  "[": "]",
  "{": "}"
} 

const isValid = function(s) {
  var stack = [];
  
  for (var i = 0; i < s.length; i++) {
      var el = s[i];
      
      if (map[el]) {
          stack.push(map[el]);
      } else {
          if (el !== stack.pop()) {
              return false;
          }
      }
  }
  
  return stack.length === 0;
};