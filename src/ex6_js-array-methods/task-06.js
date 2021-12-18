function reduce(arr, callback, startValue) {
  let startIndex = 1;
  let result = arr[0];
  if (startValue) {
    result = startValue;
    startIndex = 0;
  }
  for (let i = startIndex; i < arr.length; i += 1) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
}

module.exports = reduce;
