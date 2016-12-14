'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const petsPath = path.join(__dirname, 'pets.json');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/pets') {
    fs.readFile(petsPath, 'utf8', (err, petsJSON) => {
      if (err) {
        console.error(err.stack);

        res.statusCode = 500;
        res.setHeader = ('Content-Type', 'text/plain');
        res.end = ('Internal Server Error');

        return;
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    });
  }
  else (req.method === 'GET' && req.url === '/pets/0') {
      fs.readFile(petsPath, 'utf8', (err, petsJSON) => {
        if (err) {
          console.error(err.stack);

          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Internal Server Error');

          return;
        }
        const pets = JSON.parse(petsJSON);
        const guestJSON = JSON.stringify(pets[0]);

        res.setHeader('Content-Type', 'application/json');
        res.end(petJSON);
      });
    }
})

const port = 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});





module.exports = server;
