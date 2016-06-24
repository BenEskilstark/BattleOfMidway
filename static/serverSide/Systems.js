Systems = {};

Systems.health = function systemHealth(entities) {
    var curEntity;

    for( var entityId in entities ) {
	curEntity = entities[entityId];

	if(curEntity.components.health.value <= 0) {
	    console.log('This entity is dead.');
	}
    }
};

exports.systems = Systems;
