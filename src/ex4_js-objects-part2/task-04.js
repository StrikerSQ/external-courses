function upperFirst(str) {
  let newStr = str.charAt(0).toUpperCase();
  return newStr + str.substr(1, str.length - 1);
}

module.exports = upperFirst;
