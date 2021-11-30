
let img;
let imgArray=[];
let horseX=10;
function preload()}{
  for (let i = 0; i<5; i++){
    let path="Assets/Images/horse"+i+".jpg";
    console.log("Loading "+path);
    let img = loadImage(path);
    imgArray.push(img);
  }
  console.log(imgArray);
}
function setup(){
  createCanvas(800, 300);
}
function draw(){
  background(0);
  image(imgArray(horseIndex))
}
