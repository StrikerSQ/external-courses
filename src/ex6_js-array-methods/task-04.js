function filter(arr, callback, thisArg) {
  const results = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
}

module.exports = filter;
