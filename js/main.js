// Также используя https://swapi.dev/ API нужно сделать следующее.
// Делаете запросы на все фильмы первой трилогии звездных войн, для этого у вас есть
// "https://swapi.dev/api/films/1/
// Далее при успешном результате всех запросов -
// Вам нужно сделать запросы на все API планет которые появлялись в этих фильмах и вывести в консоль название этих планет
// Если хоть один запрос отвалился - делаете запрос на это API
// "https://swapi.dev/api/starships/9/"
// И выводите в консоль - "Имя корабля" все уничтожил

async function fetchFilms() {
  const filmUrls = [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/"
  ];

  try {
    const filmPromises = filmUrls.map(url => fetch(url).then(res => res.json()));
    const films = await Promise.all(filmPromises);
    const planetUrls = films.flatMap(film => film.planets);
    const uniquePlanetUrls = [...new Set(planetUrls)];

    const planetPromises = uniquePlanetUrls.map(url =>
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(`Помилка при отриманні даних про планету: ${url}`);
          }
          return res.json();
        })
    );

    try {
      const planets = await Promise.all(planetPromises);
      planets.forEach(planet => console.log(planet.name));
    } catch (error) {
      console.error('Помилка при отриманні даних про планети:', error);
      const starshipResponse = await fetch("https://swapi.dev/api/starships/9/");
      const starship = await starshipResponse.json();
      console.log(`${starship.name} все знищив`);
    }
  } catch (error) {
    console.error('Помилка при отриманні даних про фільми:', error);
  }
}

fetchFilms();
