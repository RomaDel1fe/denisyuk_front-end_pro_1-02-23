// 1)Найдите числа которые повторяются нечетное количество раз в массиве
// solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
// solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
// solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
// solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
// solution([2, 2, 44, 44]) => []

function oddRepetition(arr){
  const repetition = new Map();
  for (const num of arr) {
    repetition.set(num, (repetition.get(num) || 0) + 1);
  }
  const newArr = [];
  for (const [key, value] of repetition.entries()) {
    if (value % 2 !== 0) {
      newArr.push(key);
    }
  }
  return newArr;
}
console.log(oddRepetition([12, 23, 34, 12, 12, 23, 12, 45]));

// Создайте объект к которому можно будет применить любое число вызовов
// // obj.method().method().method()
// Передаваемое значение должно возвращаться в виде html тэгов
// Передаваемые аргументы должны быть только в виде строки
// Передаваемые аргументы должны помещаться внутрь предыдущих
// Добавьте метод render, который будет возвращать сгенерированную строку.
// Добавьте методу add второй параметр, который будет размещать информацию внутри тэга
// Создание первого метода должно быть без метода

function ezjQuery(tag) {
  const obj = {
    stack: [{ tag, content: '' }],

    add(tag, content = "") {
      const newTag = { tag, content };
      obj.stack.push(newTag);
      return obj;
    },

    render() {
      let result = '';
      const stackCopy = [...obj.stack];

      while (stackCopy.length > 0) {
        const current = stackCopy.pop();
        result = `<${current.tag}>${current.content}${result}</${current.tag}>`;
      }

      obj.stack.length = 1;
      obj.stack[0].content = '';

      return result;
    }
  };

  return obj;
}


// // example

var helloList = ezjQuery('body') // <body></body>

.add('div') // <body><div></div></body>

.add('ul') // <body><div><ul></ul></div></body>

.add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>

.render();

console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>

// // Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery('body') //<body></body>

.add('div') //<body><div></div></body>

.render();

console.log(bodyDiv); //<body><div></div></body>

// document.write(helloList)