function checkNumberNatural(number) {
  if (number >= 1000) {
    return "Данные неверны";
  }
  if (number == 0 || number == 1) {
    return "Не причисляется ни к простым, ни к составным числам";
  }
  if (number % 2 != 0 && number % 3 != 0) {
    return `Число ${number} - простое число`;
  }
  return `Число ${number} - составное число`;
}
module.exports = checkNumberNatural;
