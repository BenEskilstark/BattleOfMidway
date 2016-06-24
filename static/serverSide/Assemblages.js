// This is to avoid some circular dependencies. Kinda remaking the ECS
// object for use within the assemblages. The ECS object used by the
// game programmer has Assemblages as a component. Seems to work?
ECS = {
    Entity: require('./Entity.js').entity,
    Components: require('./Components.js').components,
    Systems: require('./Systems.js').systems,
};

Assemblages = {
    Body: function Body() {
        var entity = new ECS.Entity();
        entity.addComponent(new ECS.Components.Children());
        entity.addComponent(new ECS.Components.Movement());
        entity.addComponent(new ECS.Components.Position());
        entity.addComponent(new ECS.Components.Rotation());
        entity.addComponent(new ECS.Components.Health());
        entity.addComponent(new ECS.Components.Crash());
        entity.addComponent(new ECS.Components.Collision());
        entity.addComponent(new ECS.Components.Visible());
        entity.addComponent(new ECS.Components.Dimensions());
	entity.addComponent(new ECS.Components.ForClient());
        return entity;
    },

    Engine: function Engine() {
        var entity = new ECS.Entity();
        entity.addComponent(new ECS.Components.Ancestor());
        entity.addComponent(new ECS.Components.Position());
        entity.addComponent(new ECS.Components.Health());
        entity.addComponent(new ECS.Components.Collision());
        entity.addComponent(new ECS.Components.Visible());
        entity.addComponent(new ECS.Components.Dimensions());
	entity.addComponent(new ECS.Components.ForClient());
        return entity;
    },

    Projectile: function Projectile() {
        var entity = new ECS.Entity();
        entity.addComponent(new ECS.Components.Movement());
        entity.addComponent(new ECS.Components.Position());
        entity.addComponent(new ECS.Components.Crash());
        entity.addComponent(new ECS.Components.Collision());
        entity.addComponent(new ECS.Components.Visible());
        entity.addComponent(new ECS.Components.Dimensions());
	entity.addComponent(new ECS.Components.ForClient());
        return entity;
    },

    Turret: function Turret() {
        var entity = new ECS.Entity();
        entity.addComponent(new ECS.Components.Ancestor());
        entity.addComponent(new ECS.Components.Children());
        entity.addComponent(new ECS.Components.Position());
        entity.addComponent(new ECS.Components.Rotation());
        entity.addComponent(new ECS.Components.Health());
        entity.addComponent(new ECS.Components.Collision());
        entity.addComponent(new ECS.Components.Visible());
        entity.addComponent(new ECS.Components.Dimensions());
	entity.addComponent(new ECS.Components.ForClient());
        return entity;
    },

    Weapon: function Weapon() {
        var entity = new ECS.Entity();
        entity.addComponent(new ECS.Components.Ancestor());
        entity.addComponent(new ECS.Components.Position());
        entity.addComponent(new ECS.Components.Health());
        entity.addComponent(new ECS.Components.Collision());
        entity.addComponent(new ECS.Components.Visible());
        entity.addComponent(new ECS.Components.Dimensions());
	entity.addComponent(new ECS.Components.ForClient());
        return entity;
    },
};

exports.assemblages = Assemblages;
