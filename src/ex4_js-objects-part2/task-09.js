function lineAnotheLine(str, word, num) {
  let arr = str.split(" ");
  arr.splice(num, 0, word);
  return (newStr = arr.join(" "));
}

module.exports = lineAnotheLine;
