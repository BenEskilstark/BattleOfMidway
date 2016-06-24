Components = {};

Components.Health = function ComponentHealth(value) {
    value = value || 20;
    this.value = value;

    return this;
};
Components.Health.prototype.name = 'health';

Components.Position = function ComponentPosition(coordinate) {
    coordinate = coordinate || {x: 0, y: 0, angle: 0};
    this.coordinate = coordinate;

    return this;
}
Components.Position.prototype.name = 'position';

Components.Children = function ComponentChildren(children) {
    children = children || [];
    this.children = children;

    return this;
}
Components.Children.prototype.name = 'children';

// TODO: think of a better name than parent or ancestor
Components.Ancestor = function ComponentAncestor(ancestor) {
    ancestor = ancestor || null;
    this.ancestor = ancestor;

    return this;
}
Components.ancestor.prototype.name = 'ancestor';

Components.Movement = function ComponentMovement(movement) {
    movement = movement || {speed: 0, xVelocity: 0, yVelocity: 0};
    this.movement = movement;

    return this;
}
Components.Movement.prototype.name = 'movement';

Components.Rotation = function ComponentRotation(rotation) {
    rotation = rotation || 0;
    this.rotation = rotation;

    return this;
}
Components.Rotation.prototype.name = 'rotation';

Components.Ammo = function ComponentAmmo(ammo) {
    ammo = ammo || 0;
    this.ammo = ammo;

    return this;
}
Components.Ammo.prototype.name = 'ammo';

Components.Collision = function ComponentCollision(collision) {
    collision = collision || true;
    this.collision = collision;

    return this;
}
Components.Collision.prototype.name = 'collision';

Components.Crash = function ComponentCrash(crash) {
    crash = crash || true;
    this.crash = crash;

    return this;
}
Components.Crash.prototype.name = 'crash';

Components.Visible = function ComponentVisible(visible) {
    visible = visible || true;
    this.visible = visible;

    return this;
}
Components.Visible.prototype.name = 'visible';

exports.components = Components;
