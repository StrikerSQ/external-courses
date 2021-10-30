function Counter(str) {
  let arr = str.split("");
  var count = {};
  arr.forEach((val) => (count[val] = (count[val] || 0) + 1));
  console.log(count);
}

module.exports = Counter;
