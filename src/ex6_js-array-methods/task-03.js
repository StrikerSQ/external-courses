function every(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

module.exports = every;
