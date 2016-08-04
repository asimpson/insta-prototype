'use strict';

var express = require('express');
var server = express();
var sqlite = require('sqlite3');
var db = new sqlite.Database('./insta.sqlite');

server.get('/', (req, res) => {
  db.get('SELECT url FROM feeds', (err, rows) => {
    if (!err) {
      console.log(rows);
      res.send(
        `Feeds in the db:
        <ul>
          <li>${rows.url}</li>
        </ul>`
      );
    } else {
      res.send(
        'db error'
      );
    };
  });
});

server.listen(3000, () => {

  console.log('insta is running on :3000');
});
