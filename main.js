var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listSongs', function (req, res) {
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var song = {
    "song6" : {
        "song" : "I Love You So",
        "artist" : "The Walters",
        "genre" : "Indie Pop",
        "link": "https://www.youtube.com/watch?v=kYNTrRVHNmk"
     }
 }
 
 app.post('/addSong', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["song6"] = song["song6"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       var songs = JSON.parse( data );
       var song = songs["song" + req.params.id] 
       console.log( song );
       res.end( JSON.stringify(song));
    });
 })

 var id = 2;

app.delete('/deleteSong', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["song" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})