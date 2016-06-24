module.exports = {
    // ECS: {
    // 	entities: {},
    // 	components: {},
    // 	systems: {},

    // 	game: {}
    // }
    Entity: require('./Entity.js').entity,
    Components: require('./Components.js').components,
    Systems: require('./Systems.js').systems,
};
