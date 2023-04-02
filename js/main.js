// 1)Написать функцию которая будет возвращать уникальные значения в массиве
// Пример:
// const yourFunc = (arr) => {};
// const arr1 = [1,2,3,4,5,1,2,3,4,5]
// yourFunc(arr1) // [1,2,3,4,5]
// Должно работать с любыми значениями
function uniqueValueSet(arr) {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
}

function uniqueValue(arr){  
  const uniqueArr = [];
  arr.forEach((element) => {
    if(!uniqueArr.includes(element)){
      uniqueArr.push(element);
    }
  });
  return uniqueArr;
}
const arr1 = [1,2,3,4,5,1,2,3,4,5]
console.log(uniqueValueSet(arr1));
console.log(uniqueValue(arr1));

// Напишите функцию которая принимает массив целых чисел и вернет число которое встречается чаще всего, если таких чисел несколько результатом должно быть число которое встречается первым,
function popularElem(arr){
  const countMap = new Map();
  let popularNum = arr[0];
  arr.forEach((num) =>{
    const count = countMap.get(num) || 0;
    countMap.set(num, count + 1);
    if (countMap.get(num) > countMap.get(popularNum)) {
      popularNum = num;
    }
  });
  return popularNum;
}
const arr2 = [1, 2, 3, 4, 5, 2, 3, 4, 4, 5];
console.log(popularElem(arr2));


// Что вернет выражение z(x) ?
// Напишите ответ своими словами как вы понимаете
// В консоле не смотрите, сначала напишите, после проверьте себя

// let y = 5;
// let x = () => y;
// let z = t => {
//   let y = 5;
//   t();
// };
// z(x); // undefind из-за отсутствия return

// Debounce
// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function debounce(func, delay) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    func.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
    }, delay);
  };
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)