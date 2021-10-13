function a(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (j = 1; j < arr.length - 1; j++) {
      console.log(arr[j]);
    }
    if (arr[i] === arr[j]) {
      console.log("true");
      return true;
    }
    console.log("false");
    return false;
  }
}
module.exports = chekingArrayElements;
