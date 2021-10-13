function checkNumberOrString(variable) {
  if (Number.isNaN(variable)) {
    return undefined;
  }
  if (typeof variable == "string") {
    return "string";
  }
  if (typeof variable == "number") {
    return "number";
  }
  return undefined;
}

module.exports = checkNumberOrString;
