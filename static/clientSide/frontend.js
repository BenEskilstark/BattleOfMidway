var width = 600;
var height = 750;
var gameSpeed = 20;

var backgroundColor = "steelblue";

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

