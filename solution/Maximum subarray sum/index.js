var maxSequence = function(arr){
    if (arr.length === 0) return 0;
    let count = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      count = arr[i] + count;
      if (count < 0) {
        count = 0;
      }
      result = result > count ? result : count;
    }
    return result;
  }