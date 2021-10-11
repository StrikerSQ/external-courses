function putElipsisEnd(str, num) {
  str = str.trim();
  if (str.length < num) {
    return str;
  }
  let newStr = str.substring(0, num - 3);
  return newStr + "...";
}

module.exports = putElipsisEnd;
