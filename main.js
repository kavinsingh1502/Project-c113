function preload() {}

function setup() {
canvas= createCanvas(500,350);
canvas.position(500,150);
video=createCapture(VIDEO);
video.hide();}

function draw() {
image(video,0,0,640,480);
}
function take_snapshot(){
    save('student_name.png');
    }

function draw(){
fill:(0,128,0);
stroke:(0,128,0);
circle:(350,50,70);
}