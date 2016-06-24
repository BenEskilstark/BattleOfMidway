// The ECS model in this game is inspired by
// http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript

module.exports = {
    Entity: require('./Entity.js').entity,
    Components: require('./Components.js').components,
    Systems: require('./Systems.js').systems,

    Assemblages: require('./Assemblages.js').assemblages,
};
