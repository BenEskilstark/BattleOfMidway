var ECS = require('./ECS');

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
