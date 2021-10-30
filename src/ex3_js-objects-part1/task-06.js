function deepClone(obj) {
  let newObject = {};

  for (let prop in object) {
    newObject[prop] =
      typeof object[prop] !== "object" ? object[prop] : clone(object[prop]);
  }
  return newObject;
}

module.exports = deepClone;
