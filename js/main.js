async function fetchAllCharacters() {
  let characters = [];
  let nextUrl = "https://swapi.dev/api/people/";

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    characters = characters.concat(data.results);
    nextUrl = data.next;
  }

  return characters;
}

fetchAllCharacters()
  .then(characters => {
    console.log(characters);
  })
  .catch(error => {
    console.error("Помилка:", error);
  });
