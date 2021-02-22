function maxArea(height) {
  let max = 0, start = 0, end = height.length - 1;
  while (start < end) {
    let width = end - start;
    let high = 0;
    if (height[start] < height[end]) {
      high = height[start];
      start++;
    } else {
      high = height[end];
      end--;
    }

    let temp = width * high;
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}
