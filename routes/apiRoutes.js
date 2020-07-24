const db = require("../db/db.json");
const fs = require("fs");
const path = require('path');

console.log('Current Dir: ' + __dirname);

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    // res.json(db);
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  app.get("/api/notes/:id", function (req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
      if (err) throw err;
      let savedNotes = JSON.parse(data)
      res.json(savedNotes[Number(req.params.id)]);
    });
  });
  
}
