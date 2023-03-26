// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
function removeElement(array, item) {
  if (!Array.isArray(array)) {
    console.error("The first argument must be an array.");
    return;
  }

  const index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  } else {
    console.error(`The ${item} is not present in the array.`);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
function generateKey(length, characters) {
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.
function removeChars(inputStr, charsToRemove) {
  const inputArray = inputStr.split('');
  const filteredArray = inputArray.filter(char => !charsToRemove.includes(char));
  const result = filteredArray.join('');
  return result;
}

const result = removeChars("hello world", ['l', 'd']);
console.log(result); 

// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
function sum(initValue) {
  let total = initValue;

  function addToTotal(value) {
    total += value;
    console.log(total);
    return addToTotal;
  }

  console.log(total);
  return addToTotal;
}

const sumInstance = sum(3);

sumInstance(5);
sumInstance(5);
sumInstance(5);


