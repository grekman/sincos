$(document).ready(function() {});

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pi = Math.PI;
var timer;
var x = 0;
var y = Math.sin(x);
var runAnimation;

$('.my-reset').click(function() {
  runAnimation = true;
  ctx.clearRect(0, 0, 1200, 600);
  x = 0;
  y = Math.sin(x);
  sinCos();
});
$('.my-stop').click(funcStop);


function funcStop() {
  runAnimation = false;
  sinCos();
};

$('.my-start').click(function() {
  runAnimation = true;
  sinCos();
});

function sinCos() {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.lineWidth = '10';
  x = x + pi / 60;
  if ($('#test1').is(':checked')) {
    y = Math.sin(x);
  } else {
    y = Math.cos(x);
  }
  ctx.fillRect(100 * x, 300 - 200 * y, 5, 5);
  console.log(x * 100);

  if (runAnimation == true) {
    timer = setTimeout(sinCos, 10);
  }
  if (100 * x >= 1200) {
    clearTimeout(timer);
  } else return;
}

sinCos();
