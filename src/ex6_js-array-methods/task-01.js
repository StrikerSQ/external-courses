function slice(arr, start, end) {
  const newArray = [];
  let newStart = start;
  let newEnd = end;
  if (newStart < 0) {
    newStart = arr.length + newStart;
    if (newStart < 0) {
      newStart = 0;
    }
  }
  if (newEnd < 0) {
    newEnd = arr.length + newEnd;
  }
  if (newEnd > arr.length) {
    newEnd = arr.length;
  }
  if (end || end === 0) {
    for (let i = newStart; i < newEnd; i += 1) {
      newArray.push(arr[i]);
    }
  } else if (start || start === 0) {
    for (let i = newStart; i < arr.length; i += 1) {
      newArray.push(arr[i]);
    }
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = slice;
