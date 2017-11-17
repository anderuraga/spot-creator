var canvas = document.getElementById('myCanvas');
var canvasWind = document.getElementById('myCanvasWind');
paint_compas( Math.PI, Math.PI*2, canvas);
paint_compas( Math.PI, Math.PI*2, canvasWind);

function paint_compas(start, end, canva){
      console.debug("angulos %s %s",start,end);
      var ctx = canva.getContext('2d');
      ctx.clearRect(0, 0, canva.width, canva.height);

      var x = 100;
      var y = 100;
      var radius = 75;
      var antiClockwise = false;

      if ( start == end ){
        start = parseFloat(start) - 0.05;
        end = parseFloat(end) + 0.05;
      }

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
var sStartWind = document.getElementById('startWind');
var sEndWind = document.getElementById('endWind');

var angleStart = 0;
var angleEnd = 0;

sStart.onchange = function(e){
  angleStart = e.target.value;
  paint_compas(angleStart,angleEnd, canvas);
};
sEnd.onchange = function(e){
  angleEnd = e.target.value;
  paint_compas(angleStart,angleEnd, canvas);
};

sStartWind.onchange = function(e){
  angleStart = e.target.value;
  paint_compas(angleStart,angleEnd, canvasWind);
};
sEndWind.onchange = function(e){
  angleEnd = e.target.value;
  paint_compas(angleStart,angleEnd, canvasWind);
};
