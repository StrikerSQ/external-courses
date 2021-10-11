function a(prop, obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      continue;
    }
    if (prop == key) {
      return obj[key];
    }
    return undefined;
  }
}

module.exports = getRandom;
