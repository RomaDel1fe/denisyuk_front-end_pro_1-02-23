const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// * Знайти суму та кількість позитивних елементів.
let sum = 0;
let numOfPositive = 0;
arr.forEach(function (item) {  
  if(item > 0){
    sum += item
    numOfPositive++
  }
});
console.log(`Сума = ${sum}, кількість позитивних елементів = ${numOfPositive}`);

//* Знайти мінімальний елемент масиву та його порядковий номер.
let minValue = arr[0];
let minIndex = 0;
// Цикл for працює швидше ніж метод масиву forEach
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minValue) {
    minValue = arr[i];
    minIndex = i;
  }
}
console.log(`Мінімальний елемент: ${minValue}, Його порядковий номер: ${minIndex}`);

//*Знайти максимальний елемент масиву та його порядковий номер.
//?????????
let maxValue = arr[0];
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
    maxIndex = i;
  }
}
console.log(`Максимальний елемент: ${maxValue}, Його порядковий номер: ${maxIndex}`);

//* Визначити кількість негативних елементів.
let minValueLength = 0;
arr.forEach(function (item) {
  if(item < 0){
    minValueLength++;
  }
});
console.log(`Кількість негативних елементів ${minValueLength}`);

//* Знайти кількість непарних позитивних елементів.
let oddPositve = 0;
arr.forEach(function (item) {
  if(item > 0 && item % 2 === 1){
    oddPositve++;
  }
});
console.log(`Кількість непарних позитивних елементів ${oddPositve}`);

//* Знайти кількість парних позитивних елементів.
let evenPositive = 0;
arr.forEach(function (item) {
  if(item > 0 && item % 2 === 0){
    evenPositive++;
  }
});
console.log(`Кількість парних позитивних елементів ${evenPositive}`);

//* Знайти суму парних позитивних елементів.
let sumEven = 0;
arr.forEach(function (item) {
  if(item > 0 && item % 2 === 0){
    sumEven += item;
  }
});
console.log(`Сума парних позитивних елементів ${sumEven}`);

//* Знайти суму непарних позитивних елементів.
let sumOdd = 0;
arr.forEach(function (item) {
  if(item > 0 && item % 2 === 1){
    sumOdd += item;
  }
});
console.log(`Сума непарних позитивних елементів ${sumOdd}`);

//* Знайти добуток позитивних елементів.
let productPositiv = 1;
arr.forEach(function (item) {
  if(item > 0){
    productPositiv *= item;
  }
});
console.log(`Добуток позитивних елементів ${productPositiv}`);

 //* Знайти найбільший серед елементів масиву, ост альні обнулити.
const newArr = arr.map(item => {
  if (item !== maxValue) {
      return 0;
  } else {
      return item;
  }
});
console.log(`Оновлений масив ${newArr}`);