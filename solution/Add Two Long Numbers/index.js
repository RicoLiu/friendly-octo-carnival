function addStrings(str1, str2){
    str1a = str1.split('').reverse();
    str2a = str2.split('').reverse();
    let output = '';
    let longer = Math.max(str1.length, str2.length);
    let carry = false;
    for (let i = 0; i < longer; i++) {
        let result;
        if (str1a[i] && str2a[i]) {
            result = parseInt(str1a[i]) + parseInt(str2a[i]);
        } else if (str1a[i] && !str2a[i]) {
            result = parseInt(str1a[i]);
        } else if (!str1a[i] && str2a[i]) {
            result = parseInt(str2a[i]);
        }
    
        if (carry) {
            result += 1;
            carry = false;
        }
        if (result >= 10) {
            carry = true;
            output += result.toString()[1];
        } else {
            output += result.toString();
        }
    }
    output = output.split('').reverse().join('');
    if (carry) {
        output = '1' + output;
    }
    return output;
  }