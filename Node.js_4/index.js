const express = require('express');
const { checkBody, checkParams } = require('./validation/validator');
const { idScheme, userScheme } = require('./validation/scheme');
const fs = require('fs');
const path = require('path');

const app = express();
const filePath = path.join(__dirname, 'users.json');

function readUsersFile() {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    return [];
  }
}

function writeUsersFile(users) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error(err);
  }
}


function getUniqueId(users) {
  if (users.length === 0) {
    return 1;
  }
  const maxId = Math.max(...users.map(user => user.id)); // новый массив из id, затем распаковка массива через ...
  return maxId + 1;
}

app.use(express.json());

app.get('/users', (req, res) => {
  const users = readUsersFile();
  res.send({ users });
});

app.post('/users', checkBody(userScheme), (req, res) => {
  let users = readUsersFile();
  const newUser = {
    id: getUniqueId(users),
    ...req.body,
  };

  users.push(newUser);
  writeUsersFile(users);
  res.send({ id: newUser.id });
});

app.get('/users/:id', checkParams(idScheme), (req, res) => {
  const users = readUsersFile();
  const user = users.find(user => user.id === Number(req.params.id));

  if (user) {
    res.send({ user });
  } else {
    res.status(404).send({ user: null });
  }
});

app.put('/users/:id', checkParams(idScheme), checkBody(userScheme), (req, res) => {
  let users = readUsersFile();
  const user = users.find((user) => user.id === Number(req.params.id));

  if (user) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;

    writeUsersFile(users);
    res.send({ user });
  } else {
    res.status(404).send({ user: null });
  }
});

app.delete('/users/:id', checkParams(idScheme), (req, res) => {
  let users = readUsersFile();
  const user = users.find((user) => user.id === Number(req.params.id));

  if (user) {
    const userIndex = users.indexOf(user);
    users.splice(userIndex, 1);

    writeUsersFile(users);
    res.send({ user });
  } else {
    res.status(404).send({ user: null });
  }
});

app.use((req, res) => {
  res.status(404).send({ message: 'URL not found!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});