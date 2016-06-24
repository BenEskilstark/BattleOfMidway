Systems = {};

Systems.health = function systemHealth(entities) {
    for (var entityId in entities ) {
        var curEntity = entities[entityId];

        if(curEntity.components.health.value <= 0) {
            console.log('This entity is dead.');
        }
    }
};

Systems.motion = function systemMotion(entities) {
    for (var entityId in entities) {
        var curEntity = entities[entityId];
        var comps = curEntity.components;

        if (comps.movement.value !== undefined) {
            // update its own position
            comps.position.value.x += comps.movement.value.xVelocity;
            comps.position.value.y += comps.movement.value.yVelocity;

            // update children positions

        }
    }
}

exports.systems = Systems;
