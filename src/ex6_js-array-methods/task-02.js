function some(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

module.exports = some;
