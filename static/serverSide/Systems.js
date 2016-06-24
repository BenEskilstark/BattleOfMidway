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
        }

	if (comps.rotation.value !== undefined) {
	    comps.position.value.angle += comps.rotation.value;
	}

	// Since children positions are stored as relative to the
	// ancestor, they do not need to be updated.
    }
}

Systems.sendToClient = function systemSendToClient(entities, client) {
    for (var entityId in entities) {
	var curEntity = entities[entityId];
	var comps = curEntity.components;

	if (comps.forClient.value === true) {
	    // Send the position.
	    client.render({objects: [
		{
		    name: "zero",
		    x: comps.position.value.x,
		    y: comps.position.value.y,
		    angle: comps.position.value.angle,
		    width: comps.dimensions.value.width,
		    height: comps.dimensions.value.height,
		},
	    ]});

	    // Send how to draw it.
	}
    }
}

exports.systems = Systems;
