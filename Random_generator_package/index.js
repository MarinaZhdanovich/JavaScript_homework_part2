const randomNames = ["Alexey", "Maria", "Ivan", "Marina", "Dmitry", "Ekaterina", "Sergey", "Anna", "Vladimir", "Svetlana"];

const randomCities = ["Moscow", "Saint Petersburg", "Minsk", "Novosibirsk", "Gomel", "Yekaterinburg", "Brest", "Kazan", "Grodno", "Vladivostok"];

function getRandomNames(count) {
  const randomNamesList = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    randomNamesList.push(randomNames[randomIndex]);
  }
  return randomNamesList;
}

function getRandomCities(count) {
  const randomCitiesList = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * randomCities.length);
    randomCitiesList.push(randomCities[randomIndex]);
  }
  return randomCitiesList;
}

function getRandomNumbers(count, min = 0, max = 100) {
  const randomNumbersList = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbersList.push(randomNumber);
  }
  return randomNumbersList;
}

function getRandomDates(count, start = new Date(1990, 0, 1), end = new Date()) {
  const randomDatesList = [];
  for (let i = 0; i < count; i++) {
    const randomTimestamp = Math.random() * (end.getTime() - start.getTime()) + start.getTime();
    const randomDate = new Date(randomTimestamp);
    randomDatesList.push(randomDate);
  }
  return randomDatesList;
}

module.exports = { getRandomNames, getRandomCities, getRandomNumbers, getRandomDates }