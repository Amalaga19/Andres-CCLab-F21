let img;
let cam;
let img1;
let img2;
let img3;

function setup() {
  let canvas= createCanvas(1280, 480);
  canvas.parent(canvasContainer);
  cam = createCapture(VIDEO);
  cam.size(320, 240);
  cam.hide();
  img = createImage(width/4, height/2);
  img2 = createImage(width/4, height/2);
  img3 = createImage(width/4, height/2);
  img4 = createImage(width/4, height/2);
  img5 = createImage(width/4, height/2);
  img6 = createImage(width/4, height/2);
  img7 = createImage(width/4, height/2);
  img8 = createImage(width/4, height/2);
  frameRate(60)
}

function draw() {
  background(0);
  tintRedBlue(img, 0, 0);
  tintBlueRed(img2, 0,height/2);
  tintYellowBlue(img3, width/4, height/2);
  tintBlueYellow(img4, width/4, 0);
  tintPinkBlue(img5, 2*width/4, 0);
  tintBluePink(img6, 2*width/4, height/2);
  tintGreenBlue(img7, 3*width/4, 0);
  tintBlueGreen(img8, 3*width/4, height/2);
}

function tintRedBlue(imageName, coordX, coordY){
  cam.loadPixels();
  imageName.loadPixels();
  for (let y = 0; y < imageName.height; y++) {
    for (let x = 0; x < imageName.width; x++) {
      let index = (x + y * imageName.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      imageName.pixels[index + 0] = r;
      imageName.pixels[index + 1] = 255-g;
      imageName.pixels[index + 2] = 255-b;
      imageName.pixels[index + 3] = 255;
    }

  }
   imageName.updatePixels();
   image(imageName, coordX, coordY);

}
function tintBlueRed(imageName, coordX, coordY){
  cam.loadPixels();
  imageName.loadPixels();

  for (let y = 0; y < imageName.height; y++) {
    for (let x = 0; x < imageName.width; x++) {
      let index = (x + y * imageName.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      imageName.pixels[index + 0] = 255-r;
      imageName.pixels[index + 1] = g;
      imageName.pixels[index + 2] = b;
      imageName.pixels[index + 3] = 255;
    }
  }
  imageName.updatePixels();
  image(imageName, coordX, coordY);
}
function tintYellowBlue(imageName, coordX, coordY){
  cam.loadPixels();
  imageName.loadPixels();

  for (let y = 0; y < imageName.height; y++) {
    for (let x = 0; x < imageName.width; x++) {
      let index = (x + y * imageName.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      imageName.pixels[index + 0] = r;
      imageName.pixels[index + 1] = g;
      imageName.pixels[index + 2] = 255-b;
      imageName.pixels[index + 3] = 255;
    }
  }

  imageName.updatePixels();
  image(imageName, coordX, coordY);

}
function tintBlueYellow(imageName, coordX, coordY){
  cam.loadPixels();
  imageName.loadPixels();

  for (let y = 0; y < imageName.height; y++) {
    for (let x = 0; x < imageName.width; x++) {
      let index = (x + y * imageName.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      imageName.pixels[index + 0] = 255-r;
      imageName.pixels[index + 1] = 255-g;
      imageName.pixels[index + 2] = b;
      imageName.pixels[index + 3] = 255;
    }
  }
  imageName.updatePixels();
  image(imageName, coordX, coordY);

}
function tintBluePink(imageName, coordX, coordY){
  cam.loadPixels();
  imageName.loadPixels();

  for (let y = 0; y < imageName.height; y++) {
    for (let x = 0; x < imageName.width; x++) {
      let index = (x + y * imageName.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      imageName.pixels[index + 0] = r;
      imageName.pixels[index + 1] = 0;
      imageName.pixels[index + 2] = 255;
      imageName.pixels[index + 3] = 255;
    }
  }
  imageName.updatePixels();
  image(imageName, coordX, coordY);
}
function tintPinkBlue(imageName, coordX, coordY){
  cam.loadPixels();
  imageName.loadPixels();

  for (let y = 0; y < imageName.height; y++) {
    for (let x = 0; x < imageName.width; x++) {
      let index = (x + y * imageName.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      imageName.pixels[index + 0] = 255-r;
      imageName.pixels[index + 1] = g;
      imageName.pixels[index + 2] = 255;
      imageName.pixels[index + 3] = 255;
    }
  }
  imageName.updatePixels();
  image(imageName, coordX, coordY);
}
function tintGreenBlue(imageName, coordX, coordY){  cam.loadPixels();
  imageName.loadPixels();

  for (let y = 0; y < imageName.height; y++) {
    for (let x = 0; x < imageName.width; x++) {
      let index = (x + y * imageName.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      imageName.pixels[index + 0] = 0;
      imageName.pixels[index + 1] = 255-g;
      imageName.pixels[index + 2] = b;
      imageName.pixels[index + 3] = 255;
    }
  }
  imageName.updatePixels();
  image(imageName, coordX, coordY);
}
function tintBlueGreen(imageName, coordX, coordY){  cam.loadPixels();
  imageName.loadPixels();

  for (let y = 0; y < imageName.height; y++) {
    for (let x = 0; x < imageName.width; x++) {
      let index = (x + y * imageName.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      imageName.pixels[index + 0] = 0;
      imageName.pixels[index + 1] = g;
      imageName.pixels[index + 2] = 255-b;
      imageName.pixels[index + 3] = 255;
    }
  }
  imageName.updatePixels();
  image(imageName, coordX, coordY);
}
