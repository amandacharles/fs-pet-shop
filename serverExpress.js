'use strict';

const fs = require('fs');
const path = require('path');
const petsPath = path.join(__dirname, 'pets.json');

const express = require('express');
const app = express();

app.disable('x-powered-by');

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/pets', (req, res) => {
  fs.readFile(petsPath, 'utf8', (err, petsJSON) => {
    if (err) {
      console.error(err.stack);
      res.sendStatus(500);
      return;
    }
    const pets = JSON.parse(petsJSON);

    res.send(pets);
  });
});

app.post('/pets', (req, res) => {
  fs.readFile(petsPath, 'utf8', (readErr, petsJSON) => {
    if (readErr) {
      console.error(readErr.stack);
      res.sendStatus(500);
      return;
    }

    const pets = JSON.parse(petsJSON);
    const age = Number.parseInt(req.body.age);
    const name = req.body.name
    const kind = req.body.kind

    const pet = {age, name, kind};

    if (!age || !name || !kind) {
      res.sendStatus(400);
      return;
    }
      pets.push(pet);

      const newPetsJSON = JSON.stringify(pets);

      fs.writeFile(petsPath, newPetsJSON, (writeErr) => {
        if (writeErr) {
          console.error(writeErr.stack);
          res.sendStatus(500);
          return;
        }
        res.set('Content-Type', 'text/plain');
        res.send(pet);
    });
  });
});

app.get('/pets/:id', (req, res) => {
  fs.readFile(petsPath, 'utf8', (err, petsJSON) => {
    if (err) {
      console.error(err.stack);
      res.sendStatus;
      return;
    }
    const id = Number.parseInt(req.params.id);
    const pets = JSON.parse(petsJSON);

    if (id < 0 || id >= pets.length || Number.isNaN(id)) {
      res.sendStatus(404);
      return;
    }
    res.set('Content-Type', 'text/plain');
    res.send(pets[id]);
  });
});





const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})












module.exports = app;
