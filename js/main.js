// 1)Проверьте что строка содержит все символы от "a" до "z"
aToZ("wyyga") // false
aToZ("qwertyuioplkjhgfdsazxcvbnm") // true
aToZ("ejuxggfsts") // false
aToZ("qpwoeirutyalskdjfhgmznxbcv") // true
aToZ("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
aToZ("0123456789abcdefghijklmnop") // false

function aToZ(str){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterMap = new Map();
  for (let i = 0; i < alphabet.length; i++) {
    letterMap.set(alphabet[i], false);
  }
  for (let i = 0; i < str.length; i++) {
    letterMap.set(str[i], true);
  }
  return console.log(!Array.from(letterMap.values()).includes(false));
}

// 2)Вам дано предложение, верните массив из слов, которые длинее чем средняя длина всех слов.
// Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
getLongerWords(["This is a sample string"]) //expected ["This" "sample" "string"]
getLongerWords(["Some another sample"]) //expected ["another" "sample"]
getLongerWords(["Do, do, do, do... do it!"]) //expected []

function getLongerWords(arr) {
  const words = arr[0].match(/[^\s,.!?]+/g);
  if (!words) {
    return [];
  }
  const averageLength = words.reduce((acc, val) => acc + val.length, 0) / words.length;
  const result = words.filter(word => word.length > averageLength);
  return console.log(result);;
}

// 3)
// Сделайте 4 объекта - не усложняйте, просто наследование через __proto__
// - Пользователь - Верифицированный пользователь - Гость - База данных -
// База хранит информацию о пользователях
// Пользователи знают мыло админа
// Aдмин знает пароль от базы данных
// Гости могут зарегистрироваться в базе данных

// Об'єкт База Даних
const database = {
  users: [],
  adminPassword: "123456Wick",
};

// Об'єкт Гість
const guest = {
  __proto__: database,
  registerUser: function(user) {
    this.users.push(user);
  },
};

// Об'єкт Верифікований Користувач
const verifiedUser = {
  __proto__: guest,
  email: "j_wick@gmail.com",
};

// Об'єкт Користувач
const user = {
  __proto__: verifiedUser,
  name: "John Wick",
};
