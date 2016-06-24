var ECS = require('./ECS');

exports.Game = function Game() {
    // Demo ECS things.
    var self = this;

    // Make an entity with health, change the value, and observe that
    // it worked.
    var entity = new ECS.Entity();
    entity.addComponent( new ECS.Components.Health() );
    entity.print();
    entity.components.health.value = 40;
    entity.print();

    // Keep track of multiple entities.
    var entities = {};
    var entity;

    // Make 20 entities with health.
    for(var i = 0; i < 20; i++) {
	entity = new ECS.Entity();
	entity.addComponent( new ECS.Components.Health() );
	entities[entity.id = entity];
    }

    ECS.entities = entities;

    // Make a Ship.
    entity = new ECS.Assemblages.Ship();

    entity.print();

    // All the systems, in order of execution per step/frame/tick.
    var systems = [
	ECS.Systems.health,
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
	    systems[i](ECS.entities);
	}

	if (self._running !== true) {
	    clearInterval(loopIntervalId);
	}
    }

    gameLoop();
}

