function init(){
ctx=document.getElementById('canvas').getContext('2d');
ctx.fillStyle="#E34C26";
ctx.beginPath();
ctx.moveTo(39,250);
ctx.lineTo(17,0);
ctx.lineTo(262,0);
ctx.lineTo(239,250);
ctx.lineTo(139,278);
ctx.closePath();
ctx.fill();

};