Components = {};

Components.Health = function ComponentHealth(value) {
    value = value || 20;
    this.value = value;

    return this;
};
Components.Health.prototype.name = 'health';

exports.components = Components;
