Systems = {};

Systems.health = function systemHealth(entities) {
    for (var entityId in entities ) {
        var curEntity = entities[entityId];

        if(curEntity.components.health.value <= 0) {
            console.log('This entity is dead.');
        }
    }
};

Systems.position = function systemPosition(entities) {
    for (var entityId in entities) {
        var curEntity = entities[entityId];

        if (curEntity.components.position
    }
}

exports.systems = Systems;
