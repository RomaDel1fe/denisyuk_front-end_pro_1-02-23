// Написать функцию которая будет принимать массив в качестве аргумента.
// Массив типа
// const arr = [ [ [ [8] ] ] ] - вложенность может быть любой, в конце всегда цифра
// И возвращает ФАКТОРИАЛ этого числа.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function arraysFactorial(array) {
  while (Array.isArray(array)) {
    array = array[0];
  }
  return factorial(array);
}

const arr = [ [ [ [8] ] ] ];
console.log(arraysFactorial(arr));

// Створіть об’єкт calculator з трьома методами:
// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.
const calculator = {
  x: null,
  y: null,

  read(){
    this.x = parseFloat(prompt("Введіть значення a:"));
    this.y = parseFloat(prompt("Введіть значення b:"));
  },

  sum(){
    return this.x + this.y;
  },

  mul(){
    return this.x * this.y;
  },
};

calculator.read();
console.log(`Сума: ${calculator.sum()}`);
console.log(`Добуток: ${calculator.mul()}`);