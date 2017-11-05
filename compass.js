var canvas = document.getElementById('myCanvas');
paint_compas( Math.PI, Math.PI*2);

function paint_compas(start, end){
      console.debug("angulos %s %s",start,end);
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var x = 100;
      var y = 100;
      var radius = 75;
      var antiClockwise = false;

      ctx.beginPath();
      ctx.arc(x, y, radius, start*Math.PI, end*Math.PI, antiClockwise);
      ctx.lineTo(x, y);
      ctx.lineWidth = 5;
      ctx.fillStyle = "rgba(50, 120, 150, 0.8)";
      ctx.strokeStyle = "rgba(50, 120, 150, 0.8)";
      ctx.closePath();
			ctx.fill();
}

var sStart = document.getElementById('start');
var sEnd = document.getElementById('end');

var angleStart = 0;
var angleEnd = 0;

sStart.onchange = function(e){
  angleStart = e.target.value;
  paint_compas(angleStart,angleEnd);
};
sEnd.onchange = function(e){
  angleEnd = e.target.value;
  paint_compas(angleStart,angleEnd);
};
