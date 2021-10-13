function countEvenOdd(arr) {
  let countOdd = 0,
    countEven = 0,
    countZero = 0,
    arrayCountedNumber = [];
  for (key in arr) {
    if (arr[key] % 2 === 0 && arr[key] !== null && arr[key] !== 0) {
      ++countEven;
    }
    if (arr[key] % 2 !== 0 && arr[key] !== undefined) {
      ++countOdd;
    }
    if (arr[key] === 0) {
      ++countZero;
    }
  }
  arrayCountedNumber.splice(0, 0, countEven, countOdd, countZero);
  return arrayCountedNumber;
}

module.exports = countEvenOdd;
