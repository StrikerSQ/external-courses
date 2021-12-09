const input = document.querySelector('.input');
const output = document.querySelector('.output');

function debounce(callback, dalay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, dalay);
  };
}
function inputOutput() {
  output.innerHTML = input.value;
}

input.addEventListener('keyup', debounce(inputOutput, 2000));
