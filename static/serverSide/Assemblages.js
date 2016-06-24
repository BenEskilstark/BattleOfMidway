// This is to avoid some circular dependencies. Kinda remaking the ECS
// object for use within the assemblages. The ECS object used by the
// game programmer has Assemblages as a component. Seems to work?
ECS = {
    Entity: require('./Entity.js').entity,
    Components: require('./Components.js').components,
    Systems: require('./Systems.js').systems,
};

Assemblages = {
    Ship: function Ship() {
	var entity = new ECS.Entity();
	entity.addComponent( new ECS.Components.Health() );
	// entity.addComponent( new ECS.Components.Position() );
	// entity.addComponent( new ECS.Components.Children() );
	// entity.addComponent( new ECS.Components.Rotate() );
	// etc, etc.
	return entity;
    }
};

exports.assemblages = Assemblages;
