function reverse(str) {
  let arr = str.split(" ");
  return (str = arr.reverse().join(" "));
}

module.exports = reverse;
