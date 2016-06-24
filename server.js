var express = require('express')
, app = express(app)
, server = require('http').createServer(app);
var Eureca = require('eureca.io');

var eurecaServer = new Eureca.Server();

eurecaServer.attach(server);


//functions under "exports" namespace will be exposed to client side
eurecaServer.exports.hello = function () {
    console.log('Hello from client');
}
//------------------------------------------

//see browser client side code for index.html content
app.get('/', function (req, res, next) {
    res.sendfile('index.html');
});

server.listen(8000);

// ECS fun
var ECS = require('./ECS');

console.log(ECS.ECS);

