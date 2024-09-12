const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

let counterView = {
  home: 0,
  about: 0
}

const writeCounters = () => {
  fs.writeFileSync(path.join(__dirname, 'counterView.json'), JSON.stringify(counterView, null, 2))
}

const getCounters = () => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'counterView.json'), 'utf-8'));
    return data;
  } catch (err) {
    console.error(err.message);
    return counterView;
  }
};

counterView = getCounters();

app.get('/', (req, res) => {
  counterView.home++;
  writeCounters();
  res.send(`
      <h1>Корневая страница</h1>
      <p>Просмотров: ${counterView.home}</p>
      <a href='/about' > Ccылка на страницу /about</a>`)
});

app.get('/about', (req, res) => {
  counterView.about++;
  writeCounters();
  res.send(`
    <h1>Страница about</h1>
      <p>Просмотров: ${counterView.about}</p>
      <a href='/'> Ccылка на страницу /</a>`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
