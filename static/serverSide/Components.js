Components = {};

Components.Health = function ComponentHealth(value) {
    value = value || 20;
    this.value = value;

    return this;
};
Components.Health.prototype.name = 'health';

Components.Position = function ComponentPosition(value) {
    value = value || {x: 0, y: 0, angle: 0};
    this.value = value;

    return this;
}
Components.Position.prototype.name = 'position';

Components.Children = function ComponentChildren(value) {
    value = value || [];
    this.value = value;

    return this;
}
Components.Children.prototype.name = 'children';

// TODO: think of a better name than parent or ancestor
Components.Ancestor = function ComponentAncestor(value) {
    value = value || null;
    this.value = value;

    return this;
}
Components.Ancestor.prototype.name = 'ancestor';

Components.Movement = function ComponentMovement(value) {
    value = value || {speed: 0, xVelocity: 0, yVelocity: 0};
    this.value = value;

    return this;
}
Components.Movement.prototype.name = 'movement';

Components.Rotation = function ComponentRotation(value) {
    value = value || 0;
    this.value = value;

    return this;
}
Components.Rotation.prototype.name = 'rotation';

Components.Ammo = function ComponentAmmo(value) {
    value = value || 0;
    this.value = value;

    return this;
}
Components.Ammo.prototype.name = 'ammo';

Components.Collision = function ComponentCollision(value) {
    value = value || true;
    this.value = value;

    return this;
}
Components.Collision.prototype.name = 'collision';

Components.Crash = function ComponentCrash(value) {
    value = value || true;
    this.value = value;

    return this;
}
Components.Crash.prototype.name = 'crash';

Components.Visible = function ComponentVisible(value) {
    value = value || function(canvas, obj) {return function() {};};
    this.value = value;

    return this;
}
Components.Visible.prototype.name = 'visible';

Components.Dimensions = function ComponentDimensions(value) {
    value = value || {width: 0, height: 0};
    this.value = value;

    return this;
}
Components.Dimensions.prototype.name = 'dimensions';

Components.ForClient = function ComponentForClient(value) {
    value = value || true;
    this.value = value;

    return this;
}
Components.ForClient.prototype.name = 'forClient';

exports.components = Components;
