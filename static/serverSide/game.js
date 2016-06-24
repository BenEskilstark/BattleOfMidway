var ECS = require('./ECS');

exports.Game = function Game(client) {
    return {
        client: null,
        loopIntervalId: 0,
        frameRate: 60,
        tickLength: 1000 / this.frameRate,

        _running: false,

        entities: {},

        // All the systems, in order of execution per step/frame/tick.
        systems: [
            ECS.Systems.health,
            ECS.Systems.motion,
            ECS.Systems.sendToClient,
        ],

        initGameState: function() {
            // Plane
            var entity = new ECS.Assemblages.Body();
            entity.components.position.value.x = 250;
            entity.components.position.value.y = 250;
            entity.components.position.value.angle = 2.5;
            entity.components.dimensions.value.width = 100;
            entity.components.dimensions.value.height = 100;
            entity.components.movement.value.xVelocity = 0.02;
            entity.components.movement.value.yVelocity = 0.03;
            entity.components.rotation.value = -0.01;
            this.entities[entity.Id] = entity;
        },

        gameLoop: function() {
            // If the ticks are taking different amounts of time, and we want
            // the timing to be more precise for some reason, we can use this:
            // http://timetocode.tumblr.com/post/71512510386/an-accurate-nodejs-game-loop-inbetween-settimeout
            this.loopIntervalId = setInterval(this.update().bind(this), this.tickLength);
        },

        update: function() {
            return function() {
                // Run through the systems and have them do their thing on the
                // entities with the components.
                for(var i = 0; i < this.systems.length; i++) {
                    this.systems[i](ECS.entities, client);
                }

                if (this._running !== true) {
                    this.endGame();
                }
            };
        },

        endGame: function() {
            clearInterval(this.loopIntervalId);
        },

        runGame: function() {
            ECS.entities = this.entities;
            this._running = true;

            this.initGameState();
            this.gameLoop();
        }
    };
}

