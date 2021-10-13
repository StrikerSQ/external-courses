function maxValue(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      max = arr[i + 1];
    }
  }
  return max;
}
module.exports = maxValue;
