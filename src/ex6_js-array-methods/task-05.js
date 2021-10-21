function map(arr, callback, thisArg) {
  const results = [];
  for (let i = 0; i < arr.length; i += 1) {
    results.push(callback.call(thisArg, arr[i], i, arr));
  }
  return results;
}

module.exports = map;
