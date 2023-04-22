// 1)Напишите функцию.На вход функции подаётся список строк и нужно найти общий для всех этих строк префикс максимальной длины. 
// Например, для списка ["programming", "product", "procrastination"] — ответом будет "pro"
function findPrefix(strings){

  if (!strings.length) {
    return "";
  }
  
  if (strings.length === 1) {
    return strings[0];
  }
  
  const shortestString = strings.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  }, strings[0]);
  
  for (let i = 0; i < shortestString.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (strings[j][i] !== shortestString[i]) {
        return shortestString.slice(0, i);
      }
    }
  }
  
  return shortestString;
}

const strings = ["programming", "product", "procrastination"];
const commonPrefix = findPrefix(strings);
console.log(commonPrefix); // "pro"

// 2)Напишите функцию которая превращает массив двухмерных массивов в массив трехмерных и наоборот.
// Остаток добавляется в новый массив

function convertArray(arr) {
  let result = [];
  let temp = [];
  let isThreeDimensional = Array.isArray(arr[0][0]) ? false : true;
  let targetLength = isThreeDimensional ? 3 : 2;

  for (let subArr of arr) {
      for (let elem of subArr) {
          temp.push(elem);
          if (temp.length === targetLength) {
              result.push(temp);
              temp = [];
          }
      }
  }
  if (temp.length > 0) {
      result.push(temp);
  }
  return result;
}

let input1 = [[1, 2], [3, 4], [5, 6]];
let output1 = convertArray(input1);
console.log(output1);  // [[1, 2, 3], [4, 5, 6]]

let input2 = [[1, 2], [3, 4], [5, 6], [7]];
let output2 = convertArray(input2);
console.log(output2);  // [[1, 2, 3], [4, 5, 6], [7]]

let input3 = [[1, 2, 3], [4, 5, 6]];
let output3 = convertArray(input3);
console.log(output3);  // [[1, 2], [3, 4], [5, 6]]

function complicatedConvertArray(arr, targetLength) {
  let result = [];
  let temp = [];

  for (let subArr of arr) {
      for (let elem of subArr) {
          temp.push(elem);
          if (temp.length === targetLength) {
              result.push(temp);
              temp = [];
          }
      }
  }
  if (temp.length > 0) {
      result.push(temp);
  }
  return result;
}

const arr = [[1, 2, 3], [4, 5, 6]];
const output = complicatedConvertArray(arr, 5);
console.log(output);  // [[1, 2, 3, 4, 5], [6]]
