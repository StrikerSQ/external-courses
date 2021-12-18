function Calculator() {
  let result = 0;
  return {
    add: function add1(x) {
      if (!isNaN(x)) result += x;
      return add1;
    },
    subtract: function sub(x) {
      if (!isNaN(x)) result -= x;
      return sub;
    },
    divide: function div(x) {
      if (!isNaN(x) && x !== 0) result /= x;
      return div;
    },
    multiply: function mult(x) {
      if (!isNaN(x)) result *= x;
      return mult;
    },
    reset() {
      result = 0;
      return result;
    },
    getResult() {
      return result;
    },
  };
}

const calculator = new Calculator();
module.exports = calculator;
