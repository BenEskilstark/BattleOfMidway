// Create a new entity.
Entity = function Entity() {
    // Generate a pseudorandom ID.
    this.id = (+new Date()).toString(16) + (Math.random() * 100000000 | 0).toString(16) + Entity.prototype._count;

    // Increment counter.
    Entity.prototype._count++;

    // The component data will live in this object.
    this.components = {};

    return this;
};

// Keep track of entities created.
Entity.prototype._count = 0;

// Add component data to the entity. NOTE: The component must have a
// name property (which is defined as a prototype prototype of a
// component function).
Entity.prototype.addComponent = function addComponent(component) {
    this.components[component.name] = component;
    return this;
};

// Remove component data by removing the reference to it. Allows
// either a component function or a string of a component name to be
// passed in.
Entity.prototype.removeComponent = function removeComponent(component) {
    // Assume a string was passed in.
    var name = componentName;

    if (typeof componentName === 'function') {
	// Get the name from the prototype of the passed component
	// function.
	name = componentName.prototype.name;
    }

    // Remove component data by removing the reference to it.
    delete this.components[name];
    return this
};

// Function to print/log information about the entity.
Entity.prototype.print = function print() {
    console.log(JSON.stringify(this, null, 4));
    return this;
};

// This might not be the best way to do this, but I think it is
// close... makes these functions available to ECS.js.
exports.entity = Entity;
