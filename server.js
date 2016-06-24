var express = require('express')
    , app = express(app)
    , server = require('http').createServer(app);
var Eureca = require('eureca.io');

var eurecaServer = new Eureca.Server({allow: ['render']});

eurecaServer.attach(server);


// see browser client side code for index.html content
app.get('/', function (req, res, next) {
    res.sendfile('index.html');
});

app.use(express.static('static'));

server.listen(8000);

// eurecaServer.clientProxy.render({});

// Simple way to start a game.
Game = require('./static/serverSide/game').Game;

// functions under "exports" namespace will be exposed to client side
eurecaServer.exports.beginGame = function () {
    var client = this.clientProxy;
    game = new Game(client);
}
//------------------------------------------
