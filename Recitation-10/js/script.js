let prevX;
let prevY;
let currX;
let currY;
let lineColor;
let lineStroke;


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent(canvasContainer);
  background(0);
}

function draw() {
  let color = document.querySelector("#color");
  lineColor = color.value;
  let lineWidth = document.getElementById("strokeWidth");
  lineStroke = lineWidth.value;
  currX = mouseX;
  currY = mouseY;
  if (mouseIsPressed == true){
    stroke(lineColor);
    strokeWeight(lineStroke);
    line(currX, currY, prevX, prevY);
    }
  prevX = mouseX;
  prevY = mouseY;
}

function keyPressed(){
  if (key == 'c'){
    background(0);
  }
}
