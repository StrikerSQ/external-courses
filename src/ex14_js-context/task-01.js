class Calculator {
  constructor(result = 0) {
    this.result = result;
  }

  add(value) {
    if (value) {
      this.result += value;
    }
    return this;
  }

  subtract(value) {
    if (value) {
      this.result -= value;
    }
    return this;
  }

  divide(value) {
    if (value) {
      this.result /= value;
    }
    return this;
  }

  multiply(value) {
    if (value) {
      this.result *= value;
    }
    return this;
  }

  getResult() {
    return this.result;
  }

  setState(value) {
    if (value) {
      this.result = value;
    }
    return this;
  }

  reset() {
    this.result = 0;
    return this;
  }

  fetchData(callback) {
    const value = 500;

    setTimeout(() => {
      if (callback(value)) {
        this.result = value;
      }
    }, 0);

    return this;
  }
}

module.exports = new Calculator();
