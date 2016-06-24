var express = require('express')
    , app = express(app)
    , server = require('http').createServer(app);
var Eureca = require('eureca.io');

var eurecaServer = new Eureca.Server();

eurecaServer.attach(server);


//functions under "exports" namespace will be exposed to client side
eurecaServer.exports.command = function () {
    console.log('Hello from client');
}
//------------------------------------------

//see browser client side code for index.html content
app.get('/', function (req, res, next) {
    res.sendfile('index.html');
});

app.use(express.static('static'));

server.listen(8000);

// eurecaServer.clientProxy.render({});

// ECS fun
var ECS = require('./static/serverSide/ECS');

console.log(ECS.ECS);
