var ECS = require('./ECS');

exports.Game = function Game(client) {
    var self = this;

    var entities = {};
    var entity;

    var initGameState = function() {
	entity = new ECS.Assemblages.Body();
	entity.components.position.value.x = 250;
	entity.components.position.value.y = 250;
	entity.components.position.value.angle = 2.5;
	entity.components.dimensions.value.width = 100;
	entity.components.dimensions.value.height = 100;
	entity.components.movement.value.xVelocity = 2;
	entity.components.movement.value.yVelocity = 3;
	entity.components.rotation.value = 1;
	entities[entity.Id] = entity;
    }();

    ECS.entities = entities;

    // All the systems, in order of execution per step/frame/tick.
    var systems = [
	ECS.Systems.health,
	ECS.Systems.motion,
	ECS.Systems.sendToClient,
    ];

    var frameRate = 60;
    var tickLength = 1000 / frameRate;
    var ticks = 0;
    var loopIntervalId;
    this._running = true;

    var gameLoop = function() {
	// If the ticks are taking different amounts of time, and we want
	// the timing to be more precise for some reason, we can use this:
	// http://timetocode.tumblr.com/post/71512510386/an-accurate-nodejs-game-loop-inbetween-settimeout
	loopIntervalId = setInterval(update, tickLength);
    }

    // Game logic goes inside here.
    var update = function() {
	ticks++;

	// Run through the systems and have them do their thing on the
	// entities with the components.
	for(var i = 0, len = systems.length; i < len; i++) {
	    systems[i](ECS.entities, client);
	}

	if (self._running !== true) {
	    clearInterval(loopIntervalId);
	}
    }

    gameLoop();
}

