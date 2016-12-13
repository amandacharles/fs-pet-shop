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
})

const port = 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




// 'use strict';
//
// const fs = require('fs');
// const http = require('http');
// const path = require('path');
//
// const guestsPath = path.join(__dirname, 'guests.json');
//
// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/guests') {
//     fs.readFile(guestsPath, 'utf8', (err, guestsJSON) => {
// // 'guestsJSON' is what we named the returning JSON string
//       if (err) {
// // this part is so the server will log out details of the error for us
//         console.error(err.stack);
//
// // this error stuff is so the client know what happened
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Internal Server Error');
// // always put 'return' after res.end
//         return;
//       }
//       res.setHeader('Content-Type', 'application/json');
//       res.end(guestsJSON);
//     });
//   }
//   else if (req.method === 'GET' && req.url === '/guests/0') {
//     fs.readFile(guestsPath, 'utf8', (err, guestsJSON) => {
//       if (err) {
//         console.error(err.stack);
//
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Internal Server Error');
//
//         return;
//       }
// // parse the json file so you can access it
//       const guests = JSON.parse(guestsJSON);
// // then stringify to return JSON format data, the const here should be singular
//       const guestJSON = JSON.stringify(guests[0]);
//
//       res.setHeader('Content-Type', 'application/json');
// // put the guest of interest in the body of the response using res.end
//       res.end(guestJSON);
//     });
//   }
//   else if (req.method === 'GET' && req.url === '/guests/1') {
//       fs.readFile(guestsPath, 'utf8', (err, guestsJSON) => {
//         if (err) {
//           console.error(err.stack);
//
//           res.statusCode = 500;
//           res.setHeader('Content-Type', 'text/plain');
//           res.end('Internal Server Error');
//
//           return;
//         }
//
//         const guests = JSON.parse(guestsJSON);
//         const guestJSON = JSON.stringify(guests[1]);
//
//         res.setHeader('Content-Type', 'application/json');
//         res.end(guestJSON);
//       });
//     }
//   else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Not found');
//   }
// });
//
// const port = process.env.PORT || 8000;
//
// server.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });


module.exports = server;
