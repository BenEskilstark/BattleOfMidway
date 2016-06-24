var width = 600;
var height = 750;
var gameSpeed = 20;

var backgroundColor = "steelblue";

document.onkeydown = checkKeyDown;
document.onkeyup = checkKeyUp;
document.onmousedown = checkMouseDown;

zero.img.src = "../images/zero.png";
zero.img.onload = render;

var selectedComp = null;

client.exports.render = function() {
    var canvas = document.getElementById("c").getContext("2d");

    // clear canvas
    canvas.fillStyle = backgroundColor;
    canvas.fillRect(0, 0, width, height);

    // draw ships
    canvas.fillStyle = "gray";
    for (var i = 0; i < ship.components.length; i++) {
        var comp = ship.components[i];
        renderObject(canvas, comp, comp.render(canvas, comp));
    }

    // draw fighter
    renderObject(canvas, zero, function() {
        canvas.drawImage(zero.img, zero.x, zero.y, 100, 100);
    });
}

function renderObject(canvas, obj, renderFunc /* callback */) {
    canvas.save();
    if (obj.targetAngle !== undefined) {
        canvas.translate(obj.x, obj.y);
        canvas.rotate(obj.angle);
        canvas.translate(-1 * obj.x, -1 * obj.y);
    } else {
        canvas.translate(obj.x + obj.width / 2, obj.y + obj.height / 2)
        canvas.rotate(obj.angle);
        canvas.translate(-1 * (obj.x + obj.width / 2), -1 * (obj.y + obj.height / 2));
    }

    renderFunc();
    canvas.restore();
}

function makeTurret(x, y, r) {
    return {
        x: x,
        y: y,
        width: 1/2 * r,
        height: 1/2 * r,
        radius: r,

        angle: 0,
        angleDelta: 0,

        speed: 0,
        xVelocity: 0,
        yVelocity: 0,

        targetX: x,
        targetY: y - 1000,
        targetAngle: 0,

        selected: false,
        render: function(canvas, comp) {
            return function() {
                canvas.beginPath();
                if (!comp.selected) {
                    canvas.strokeStyle = "black";
                } else {
                    canvas.strokeStyle = "red";
                }
                canvas.arc(comp.x, comp.y, comp.radius, 0, Math.PI * 2);
                canvas.stroke();
                canvas.fill();
                canvas.rect(
                    comp.x - comp.radius/4,
                    comp.y - comp.radius/4,
                    comp.radius/2,
                    -2 * comp.radius
                );
                canvas.stroke();
                canvas.fill();
                canvas.closePath();
            };
        }
    };
}

// function checkKeyDown(e) {
//     e = e || window.event;
//
//     // w
//     if (e.keyCode == 87) {
//
//     }
//     // a
//     if (e.keyCode == 65) {
//         zero.angleDelta = -1 * Math.PI / 50;
//     }
//     // s
//     if (e.keyCode == 83) {
//
//     }
//     // d
//     if (e.keyCode == 68) {
//         zero.angleDelta = Math.PI / 50;
//     }
// }
//
// function checkKeyUp(e) {
//     e = e || window.event;
//
//     // w
//     if (e.keyCode == 87) {
//
//     }
//     // a
//     if (e.keyCode == 65) {
//         zero.angleDelta = 0;
//     }
//     // s
//     if (e.keyCode == 83) {
//
//     }
//     // d
//     if (e.keyCode == 68) {
//         zero.angleDelta = 0;
//     }
// }
//
// function checkMouseDown(e) {
//     var canvas = document.getElementById("c");
//     var boundingRect = canvas.getBoundingClientRect();
//     var mouseX = (e.clientX - boundingRect.left) * canvas.width / boundingRect.width;
//     var mouseY = (e.clientY - boundingRect.top) * canvas.height / boundingRect.height;
//
//     var clickedTurret = false;
//     for (var i = 0, comp; comp = ship.components[i]; i++) {
//         if (didClick(comp, mouseX, mouseY)) {
//             clickedTurret = true;
//             for (var j = 0, c; c = ship.components[j]; j++) {
//                 c.selected = false;
//             }
//             comp.selected = true;
//             selectedComp = comp;
//         }
//     }
//
//     if (!clickedTurret && selectedComp && selectedComp.targetX) {
//         var comp = selectedComp;
//         comp.targetX = mouseX;
//         comp.targetY = mouseY;
//
//         var xLength = mouseX - comp.x;
//         var yLength = mouseY - comp.y;
//         if (!comp.bow) {
//             comp.targetAngle = Math.atan(xLength/(-1*yLength));
//             if (xLength < 0 && yLength > 0) {
//                 comp.targetAngle -= Math.PI;
//             }
//             if (xLength > 0 && yLength > 0) {
//                 comp.targetAngle += Math.PI;
//             }
//             comp.angleDelta = Math.PI/(comp.radius * 3);
//             if (comp.targetAngle < comp.angle) {
//                 comp.angleDelta *= -1;
//             }
//             if (Math.abs(comp.targetAngle - comp.angle) > Math.PI) {
//                 comp.angleDelta *= -1;
//                 if (comp.targetAngle < 0) {
//                     comp.targetAngle += Math.PI * 2;
//                 } else {
//                     comp.targetAngle -= Math.PI * 2;
//                 }
//             }
//
//         // controlling the ship from the bow
//         } else {
//             ship.targetAngle = Math.atan(xLength/(-1*yLength));
//             if (xLength < 0 && yLength > 0) {
//                 ship.targetAngle -= Math.PI;
//             }
//             if (xLength > 0 && yLength > 0) {
//                 ship.targetAngle += Math.PI;
//             }
//             ship.angleDelta = Math.PI/(ship.radius * 3);
//             if (ship.targetAngle < ship.angle) {
//                 ship.angleDelta *= -1;
//             }
//             if (Math.abs(ship.targetAngle - ship.angle) > Math.PI) {
//                 ship.angleDelta *= -1;
//                 if (ship.targetAngle < 0) {
//                     ship.targetAngle += Math.PI * 2;
//                 } else {
//                     ship.targetAngle -= Math.PI * 2;
//                 }
//             }
//         }
//     }
// }
//
// function didClick(comp, mouseX, mouseY) {
//     if (comp.radius) {
//         var dx = comp.x - mouseX;
//         var dy = comp.y - mouseY;
//         return (dx * dx) + (dy * dy) < comp.radius * comp.radius;
//     } else {
//         // TODO: change this
//         return false;
//     }
// }
