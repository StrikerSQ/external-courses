function eachLetterFirst(str) {
  let arr = str.split(" ");
  return arr
    .map(function (el) {
      return el.charAt(0).toUpperCase() + el.slice(1);
    })
    .join(" ");
}

module.exports = eachLetterFirst;
