/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-syntax */
function Sweet() {}

Sweet.prototype.getWeight = function () {
  return this.weight;
};

Sweet.prototype.getPrice = function () {
  return this.price;
};

function Jelly(name, weight, price) {
  this.name = name;
  this.weight = weight;
  this.price = price;
}

Jelly.prototype = new Sweet();

function Jellybean(flavour) {
  this.name = `${flavour}-flavored jellybean`;
  this.weight = 100;
  this.price = 80;
  Jelly.call(this.name, this.weight, this.price);
}

Jellybean.prototype = Jelly.prototype;

function Jellyroll(flavour) {
  this.name = `${flavour}-flavored jellyroll`;
  this.weight = 150;
  this.price = 125;
  Jelly.call(this.name, this.weight, this.price);
}

Jellyroll.prototype = Jelly.prototype;

function Cookie(name, weight, price) {
  this.name = name;
  this.weight = weight;
  this.price = price;
}

Cookie.prototype = new Sweet();

function Biscuit(flavour) {
  this.name = `${flavour}-flavored biscuit`;
  this.weight = 200;
  this.price = 55;
  Cookie.call(this.name, this.weight, this.price);
}

Biscuit.prototype = Cookie.prototype;

function QuickBread(flavour) {
  this.name = `${flavour}-flavored quick bread`;
  this.weight = 170;
  this.price = 105;
  Cookie.call(this.name, this.weight, this.price);
}

QuickBread.prototype = Cookie.prototype;

const gift = {
  package: [],

  getFullWeight() {
    let fullWeight = 0;
    for (const key of this.package) {
      fullWeight += key.getWeight();
    }
    return fullWeight;
  },

  getFullPrice() {
    let fullPrice = 0;
    for (const key of this.package) {
      fullPrice += key.getPrice();
    }
    return fullPrice;
  },

  addItem() {
    for (const key of arguments) {
      this.package.push(key);
    }
    return this.package;
  },

  sortItems(prop) {
    this.package.sort((a, b) => a[prop] - b[prop]);
    return this.package;
  },

  findItem(name) {
    for (const key of this.package) {
      if (key.name === name) {
        return key;
      }
    }
    return 'There is no sweet with this name';
  },
};

gift.addItem(
  new Jellybean('blackberry'),
  new Jellybean('cherry'),
  new Jellybean('orange'),
  new Jellyroll('pineapple'),
  new Jellyroll('wild berry'),
  new Biscuit('chocolate'),
  new Biscuit('strawberry'),
  new Biscuit('cherry'),
  new QuickBread('ginger'),
);
