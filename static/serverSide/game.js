var ECS = require('./static/serverSide/ECS');

var entity = new ECS.Entity();
entity.addComponent( new ECS.Components.Health() );
entity.print();
entity.components.health.value = 40;
entity.print();

var entities = {};
var entity;

for(var i = 0; i < 20; i++) {
    entity = new ECS.Entity();
    entity.addComponent( new ECS.Components.Health() );
    entities[entity.id = entity];
}

ECS.entities = entities;

