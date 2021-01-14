var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var mousex=0
var mousey=0
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(400,300,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",circle);
function circle(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle="red";
ctx.linewidth=5;
ctx.arc(mousex,mousey,50,0,2*Math.PI)
ctx.stroke();
}