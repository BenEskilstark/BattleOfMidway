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

// Demo ECS things. The below could all be abstracted away into a game
// function in another file, if we wish to make the server file
// simpler.
var ECS = require('./static/serverSide/ECS');
var Assemblages = require('./static/serverSide/Assemblages').assemblages;

var entity = new ECS.Entity();
entity.addComponent( new ECS.Components.Health() );
entity.print();
entity.components.health.value = 40;
entity.print();

var entities = {};
var entity;

for(var i = 0; i < 20; i++) {
    entity = new ECS.Entity();
    entity.addComponent( new ECS.Components.Health() );
    entities[entity.id = entity];
}

ECS.entities = entities;

entity = new Assemblages.Ship();

entity.print()

// All the systems, in order of execution.
var systems = [
    ECS.Systems.health,
];

function gameLoop() {
    for(var i = 0, len = systems.length; i < len; i++) {
	systems[i](ECS.entities);
    }
}

// We might want to do this differently.
// requestAnimationFrame(gameLoop);
