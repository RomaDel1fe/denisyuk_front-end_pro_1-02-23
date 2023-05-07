import { greet, numbers } from "./data.js";

greet("Олександр");

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Сума чисел: ${sum}`);