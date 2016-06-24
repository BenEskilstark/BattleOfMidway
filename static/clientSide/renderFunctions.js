// The code goes out here to pre-load the image before the function gets called.
// There's definitely a better way to do this though...
var zeroImg = new Image();
zeroImg.src = "../images/zero.png";

var renderFunctions = {
    zero: function(canvas, obj) {
        return function() {
            canvas.drawImage(zeroImg, 0, 0, 100, 100);
        };
    },

    turret: function(canvas, obj) {
        return function() {
            canvas.fillStyle = "gray";
            canvas.beginPath();
            if (!obj.selected) {
                canvas.strokeStyle = "black";
            } else {
                canvas.strokeStyle = "red";
            }
            canvas.arc(0, 0, obj.radius, 0, Math.PI * 2);
            canvas.stroke();
            canvas.fill();
            canvas.rect(
                -1 * obj.radius/4,
                -1 * obj.radius/4,
                obj.radius/2,
                -2 * obj.radius
            );
            canvas.stroke();
            canvas.fill();
            canvas.closePath();
        };
    }
}
