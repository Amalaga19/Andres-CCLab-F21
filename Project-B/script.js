let bandArray=[];
let bandY;
let bandAltitude;
let n = 0;
let yAltidude;
let randomHue;
let energy=0;
let energyCheck=false;
let energyLimit;
let increase = true;
let lineY;
let lineAltitude;
let lineNoise;
let lineHue;
let lineSat=100;
let lineBr=100;
let lineAlpha=1;
let checkFade = true;
let bandLine;
let noiseStep=0;
function setup(){
  let canvas = createCanvas(windowWidth, 500);
  canvas.parent(canvasContainer);  colorMode(HSB);
  background(0);
  randomHue=random(100);
  yAltitude= int(random(50, height));

}
function draw(){
  background(0,0.01);
  let limitEnergy= document.getElementById("bandEnergy");
  energyLimit = limitEnergy.value;
  band(yAltitude, energyLimit);
}

function band(altitude, lineEnergyLimit){
  if (altitude<=height && altitude>=height-height/4){
    if (randomHue<50){
      lineHue=map(altitude, height, (height-height/6), 330, 300);
    }
    else{
      lineHue=map(altitude, height, (height-height/6), 120, 150);
    }
  }
  else if (altitude<=height/4 && altitude >=50){
    if(randomHue<(100/3)){
    lineHue=map(altitude, height/4, 50, 345, 330);}
    else if(randomHue>(100/3) && randomHue<2*(100/30)){
    lineHue=map(altitude, height/4, 50, 0, 15);}
    else{
    lineHue=map(altitude, height/4, 50, 120, 150);
    }
  }
  else {
    lineHue=map(altitude, height- height/4, height/4, 120, 150);
  }
  if (bandArray.length==width){
    bandArray.splice(0,width);
  }
  console.log(altitude);
for(let i=0; i<width; i++){
  lineNoise=50*noise(n);
  lineY= altitude-lineNoise;
  let newLine = new Line(i, lineY, lineNoise, lineHue, lineSat, lineBr, lineAlpha);
  bandArray.push(newLine);
  n+=noiseStep;
}
n=noiseStep*frameCount;
if (energyCheck==false){
  energy+=1;
  if (energy==lineEnergyLimit){
    energyCheck=true;
  }
}

else if (energyCheck == true){
  energy-=1;
  if(energy<=0){
    lineAlpha*=0.995;
    if (lineAlpha<=0.005){
      bandArray.splice(0, bandArray.length);
    }
  }
}
for(let j=0; j<bandArray.length; j++){
  bandArray[j].update();
  if (energyLimit<=1200 && energyLimit>=1000){
  mode3();}
  else if (energyLimit<=1000 && energyLimit>=800){
    mode2();}
  else if (energyLimit<=800 && energyLimit>=600){
    mode1();}


  bandArray[j].display();
}}

  function mode1(){
    noiseStep= 0.000000025*energy;
    if (noiseStep>=6*energyLimit*0.000000025){
    noiseStep+=0;
      increase=false;
    }
    if (increase=false){
      noiseStep-= 0.000000025;
    }
    if (checkFade==true){
    lineSat-=0.001;
    lineBr-=0.001;
    lineAlpha+=0;
    if (lineSat<=30){
      checkFade=false;
    }
    }
    else if (checkFade==false){
    lineSat+=0.001;
    lineBr+=0.001;
    if (lineSat>=100){
      checkFade = true;
    }
  }}
  function mode2(){
    noiseStep+=0.00000005;
    if (noiseStep>=6*energyLimit*0.00000005){
      noiseStep+=0;
      increase=false;
    }
    if (increase=false){
      noiseStep-=0.00000005;
    }
    if (checkFade==true){
    lineSat-=0.0025;
    lineBr-=0.0025;
    lineAlpha+=0;
    if (lineSat<=30){
      checkFade=false;
    }
    }
    else if (checkFade==false){
    lineSat+=0.0025;
    lineBr+=0.0025;
    if (lineSat>=100){
      checkFade = true;
    }
  }
  }
  function mode3(){
    noiseStep+=0.0000001;
    if (noiseStep>=6*energyLimit*0.0000001){
      noiseStep+=0;
      increase=false;
    }
    if(increase=false){
      noiseStep-=0.0000001;
    }
    if (checkFade==true){
    lineSat-=0.005;
    lineBr-=0.005;
    lineAlpha+=0;
    if (lineSat<=30){
      checkFade=false;
    }
    }
    else if (checkFade==false){
    lineSat+=0.005;
    lineBr+=0.005;
    if (lineSat>=100){
      checkFade = true;
    }
  }
  }



class Line{
  constructor(x, y, noiseVal, hue, sat, br, alpha){
    this.x = x;
    this.y = y;
    this.hue=hue;
    this.sat=sat;
    this.br=br;
    this.alpha=alpha;
    this.length=noiseVal;
    this.mult=15;
  }
  update(){
    this.mult*=random(1,1.5);
  }
  display(){
    for(let k=0; k<40; k++){
      strokeWeight(0.075);
      stroke(this.hue, this.sat, this.br, this.alpha-(k/10));
      line(this.x,this.y,this.x,this.y-(this.length+((k*this.mult)/5)));
    }
  }
}
