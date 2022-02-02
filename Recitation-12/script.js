let img;
let cam;
let mode;
let diameter;
let shape;
let shapeNum;
function setup() {
  let canvas= createCanvas(640, 480);
  canvas.parent(canvasContainer);
  cam = createCapture(VIDEO);
  cam.hide();
  rectMode(CENTER);
  img = createImage(width, height);
  mode = int(random(1,9));
  shape = random();
  frameRate(60)
  shapeNum = int(random(2, 15));
  noStroke();
}

function draw() {
  let pixelWidth = document.getElementById("pixelWidth");
  let pixelWidth1 = pixelWidth.value;
  let pixelHeight = document.getElementById("pixelHeight");
  let pixelHeight1 = pixelHeight.value;
  background(0);
  if (mode == 1){tintRedBlue(img,pixelWidth1, pixelHeight1, shapeNum);}
  else if (mode == 2){tintBlueRed(img, pixelWidth1, pixelHeight1, shapeNum);}
  else if (mode == 3){tintYellowBlue(img, pixelWidth1, pixelHeight1, shapeNum);}
  else if (mode == 4){tintBlueYellow(img, pixelWidth1, pixelHeight1, shapeNum);}
  else if (mode == 5){tintPinkBlue(img, pixelWidth1, pixelHeight1, shapeNum);}
  else if (mode == 6){tintBluePink(img, pixelWidth1, pixelHeight1, shapeNum);}
  else if (mode == 7){tintGreenBlue(img, pixelWidth1, pixelHeight1, shapeNum);}
  else if (mode == 8){tintBlueGreen(img, pixelWidth1, pixelHeight1, shapeNum);}
}

function tintRedBlue(imageName, shapeWidth, shapeHeight, shapeNumber){
cam.loadPixels();
imageName.loadPixels();
for (let y = 0; y < imageName.height; y+= shapeNumber) {
  for (let x = 0; x < imageName.width; x+= shapeNumber) {
    let index = (x + y * imageName.width) * 4;
    let r = cam.pixels[index + 0];
    let g = cam.pixels[index + 1];
    let b = cam.pixels[index + 2];

    fill(r, 255-g, 255-b);
    if (shape>0 && shape<0.5){
      rect(x,y, shapeWidth, shapeHeight);
    }
    else if (shape>=0.5 && shape<=1){
      ellipse(x,y, shapeWidth, shapeHeight);
    }
  }
}
}
function tintBlueRed(imageName, shapeWidth, shapeHeight, shapeNumber){
  cam.loadPixels();
  imageName.loadPixels();
  for (let y = 0; y < imageName.height; y+= shapeNumber) {
    for (let x = 0; x < imageName.width; x+= shapeNumber) {
      let index = (x + y * imageName.width) * 4;
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      fill(255-r, g, b);
      if (shape>0 && shape<0.5){
        rect(x,y, shapeWidth, shapeHeight);
      }
      else if (shape>=0.5 && shape<=1){
        ellipse(x,y,shapeWidth, shapeHeight);
      }
    }
  }
}
function tintYellowBlue(imageName, shapeWidth, shapeHeight, shapeNumber){
    cam.loadPixels();
    imageName.loadPixels();
    for (let y = 0; y < imageName.height; y+= shapeNumber) {
      for (let x = 0; x < imageName.width; x+= shapeNumber) {
      let index = (x + y * imageName.width) * 4;
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      fill(r, g, 255-b);
      if (shape>0 && shape<0.5){
        rect(x,y, shapeWidth, shapeHeight);
      }
      else if (shape>=0.5 && shape<=1){
        ellipse(x,y,shapeWidth, shapeHeight);
      }
    }
  }
  }
function tintBlueYellow(imageName, shapeWidth, shapeHeight, shapeNumber){
  cam.loadPixels();
  imageName.loadPixels();
  for (let y = 0; y < imageName.height; y+= shapeNumber) {
    for (let x = 0; x < imageName.width; x+= shapeNumber) {
      let index = (x + y * imageName.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      fill(255-r, 255-g, b);
      if (shape>0 && shape<0.5){
        rect(x,y, shapeWidth, shapeHeight);
      }
      else if (shape>=0.5 && shape<=1){
        ellipse(x,y,shapeWidth, shapeHeight);
      }
    }
  }
}
function tintBluePink(imageName, shapeWidth, shapeHeight, shapeNumber){
cam.loadPixels();
imageName.loadPixels();
for (let y = 0; y < imageName.height; y+= shapeNumber) {
  for (let x = 0; x < imageName.width; x+= shapeNumber) {
    let index = (x + y * imageName.width) * 4;
    let r = cam.pixels[index + 0];
    let g = cam.pixels[index + 1];
    let b = cam.pixels[index + 2];

    fill(r, 0, 255);
    if (shape>0 && shape<0.5){
      rect(x,y, shapeWidth, shapeHeight);
    }
    else if (shape>=0.5 && shape<=1){
      ellipse(x,y,shapeWidth, shapeHeight);
    }
  }
}
}
function tintPinkBlue(imageName, shapeWidth, shapeHeight, shapeNumber){
cam.loadPixels();
imageName.loadPixels();
for (let y = 0; y < imageName.height; y+= shapeNumber) {
  for (let x = 0; x < imageName.width; x+= shapeNumber) {
    let index = (x + y * imageName.width) * 4;
    let r = cam.pixels[index + 0];
    let g = cam.pixels[index + 1];
    let b = cam.pixels[index + 2];

    fill(255-r, g, 255);
    if (shape>0 && shape<0.5){
      rect(x,y, shapeWidth, shapeHeight);
    }
    else if (shape>=0.5 && shape<=1){
      ellipse(x,y,shapeWidth, shapeHeight);
    }
  }
}
}
function tintGreenBlue(imageName, shapeWidth, shapeHeight, shapeNumber){
  cam.loadPixels();
  imageName.loadPixels();
  for (let y = 0; y < imageName.height; y+= shapeNumber) {
    for (let x = 0; x < imageName.width; x+= shapeNumber) {
      let index = (x + y * imageName.width) * 4;
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      fill(0, 255-g, b);
      if (shape>0 && shape<0.5){
        rect(x,y, shapeWidth, shapeHeight);
      }
      else if (shape>=0.5 && shape<=1){
        ellipse(x,y,shapeWidth, shapeHeight);
      }
    }
  }
}
function tintBlueGreen(imageName, shapeWidth, shapeHeight, shapeNumber){
  cam.loadPixels();
  imageName.loadPixels();
  for (let y = 0; y < imageName.height; y+= shapeNumber) {
    for (let x = 0; x < imageName.width; x+= shapeNumber) {
      let index = (x + y * imageName.width) * 4;
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      fill(0, g, 255-b);
      if (shape>0 && shape<0.5){
        rect(x,y, shapeWidth, shapeHeight);
      }
      else if (shape>=0.5 && shape<=1){
        ellipse(x,y,shapeWidth, shapeHeight);
      }
    }
  }
  }
