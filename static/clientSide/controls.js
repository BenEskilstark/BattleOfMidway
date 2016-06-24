document.onkeydown = checkKeyDown;
document.onkeyup = checkKeyUp;
document.onmousedown = checkMouseDown;

function checkKeyDown(e) {
    e = e || window.event;

    // w
    if (e.keyCode == 87) {

    }
    // a
    if (e.keyCode == 65) {
        zero.angleDelta = -1 * Math.PI / 50;
    }
    // s
    if (e.keyCode == 83) {

    }
    // d
    if (e.keyCode == 68) {
        zero.angleDelta = Math.PI / 50;
    }
}

function checkKeyUp(e) {
    e = e || window.event;

    // w
    if (e.keyCode == 87) {

    }
    // a
    if (e.keyCode == 65) {
        zero.angleDelta = 0;
    }
    // s
    if (e.keyCode == 83) {

    }
    // d
    if (e.keyCode == 68) {
        zero.angleDelta = 0;
    }
}

function checkMouseDown(e) {
    var canvas = document.getElementById("c");
    var boundingRect = canvas.getBoundingClientRect();
    var mouseX = (e.clientX - boundingRect.left) * canvas.width / boundingRect.width;
    var mouseY = (e.clientY - boundingRect.top) * canvas.height / boundingRect.height;

    var clickedTurret = false;
    for (var i = 0, comp; comp = ship.components[i]; i++) {
        if (didClick(comp, mouseX, mouseY)) {
            clickedTurret = true;
            for (var j = 0, c; c = ship.components[j]; j++) {
                c.selected = false;
            }
            comp.selected = true;
            selectedComp = comp;
        }
    }

    if (!clickedTurret && selectedComp && selectedComp.targetX) {
        var comp = selectedComp;
        comp.targetX = mouseX;
        comp.targetY = mouseY;

        var xLength = mouseX - comp.x;
        var yLength = mouseY - comp.y;
        if (!comp.bow) {
            comp.targetAngle = Math.atan(xLength/(-1*yLength));
            if (xLength < 0 && yLength > 0) {
                comp.targetAngle -= Math.PI;
            }
            if (xLength > 0 && yLength > 0) {
                comp.targetAngle += Math.PI;
            }
            comp.angleDelta = Math.PI/(comp.radius * 3);
            if (comp.targetAngle < comp.angle) {
                comp.angleDelta *= -1;
            }
            if (Math.abs(comp.targetAngle - comp.angle) > Math.PI) {
                comp.angleDelta *= -1;
                if (comp.targetAngle < 0) {
                    comp.targetAngle += Math.PI * 2;
                } else {
                    comp.targetAngle -= Math.PI * 2;
                }
            }

        // controlling the ship from the bow
        } else {
            ship.targetAngle = Math.atan(xLength/(-1*yLength));
            if (xLength < 0 && yLength > 0) {
                ship.targetAngle -= Math.PI;
            }
            if (xLength > 0 && yLength > 0) {
                ship.targetAngle += Math.PI;
            }
            ship.angleDelta = Math.PI/(ship.radius * 3);
            if (ship.targetAngle < ship.angle) {
                ship.angleDelta *= -1;
            }
            if (Math.abs(ship.targetAngle - ship.angle) > Math.PI) {
                ship.angleDelta *= -1;
                if (ship.targetAngle < 0) {
                    ship.targetAngle += Math.PI * 2;
                } else {
                    ship.targetAngle -= Math.PI * 2;
                }
            }
        }
    }
}

function didClick(comp, mouseX, mouseY) {
    if (comp.radius) {
        var dx = comp.x - mouseX;
        var dy = comp.y - mouseY;
        return (dx * dx) + (dy * dy) < comp.radius * comp.radius;
    } else {
        // TODO: change this
        return false;
    }
}
