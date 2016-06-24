var express = require('express')
    , app = express(app)
    , server = require('http').createServer(app);
var Eureca = require('eureca.io');

var eurecaServer = new Eureca.Server({allow: ['render']});

eurecaServer.attach(server);

// functions under "exports" namespace will be exposed to client side
eurecaServer.exports.beginGame = function () {
    var client = this.clientProxy;
    client.render({objects: [
        {
            name: "zero",
            x: 250,
            y: 550,
            width: 100,
            height: 100
        },
        {
            name: "turret",
            x: 300,
            y: 600,
            radius: 25,
            width: 25,
            height: 25,
            targetAngle: 0
        }
    ]});
}
//------------------------------------------

//see browser client side code for index.html content
app.get('/', function (req, res, next) {
    res.sendfile('index.html');
});

app.use(express.static('static'));

server.listen(8000);

// ECS fun
var ECS = require('./static/serverSide/ECS');

console.log(ECS.ECS);
