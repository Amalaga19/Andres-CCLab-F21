let superRipple = [];
let checkClick = false;
let ripplePosX;
let ripplePosY;
let keepRipple = 0;
let counter;
function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

function draw() {
  colorMode(HSB);
  background(0);
  if (checkClick == true) {
    keepRipple++;
    rippleGroup(ripplePosX, ripplePosY);
  }
}

function rippleGroup(positionX, positionY) {
  colorMode(HSB);
  let bigRippleX = positionX;
  let bigRippleY = positionY;
  let rippHue = random(180, 270);
  let rippSat = 100;
  let rippBr = 100;
  let rippAlpha = 1;
  if (keepRipple < 25) {
    ripple = new Ripple(
      bigRippleX,
      bigRippleY,
      rippHue,
      rippSat,
      rippBr,
      rippAlpha
    );
  } else if (keepRipple >= 25) {
    ripple = new Ripple(bigRippleX, bigRippleY, 0, 0, 0, 0);
  }
  superRipple.push(ripple);

  for (let i = 0; i < superRipple.length; i++) {
    superRipple[i].update();
    superRipple[i].bounceUpdate();
    superRipple[i].checkWall();

    superRipple[i].display();
    if (superRipple[i].rippleAlpha < 0.05) {
      superRipple.splice(i, 1);
    }
  }
}

function mouseClicked() {
  if (checkClick == true) {
    keepRipple = 0;
    ripplePosX = mouseX;
    ripplePosY = mouseY;
    checkClick = false;
    checkClick = true;
  } else if (checkClick == false) {
    checkClick = true;
    keepRipple = 0;
  }
}

class Ripple {
  constructor(coordX, coordY, rippleHue, rippleSat, rippleBr, rippleAlpha) {
    this.rippleX = coordX;
    this.rippleY = coordY;
    this.diam = 10;
    this.bounceDiam = 5;
    this.expandSpeed = random(10, 20);
    this.bounceSpeed = random(5, 15);
    this.rippleHue = rippleHue;
    this.rippleSat = rippleSat;
    this.rippleBr = rippleBr;
    this.rippleAlpha = 1;
    this.bounceAlpha;
  }

  update() {
    this.diam += this.expandSpeed;
    this.rippleAlpha *= random(0.9, 0.95);
    this.rippleSat -= 0.5;
    this.rippleBr -= 0.5;
  }

  display() {
    colorMode(HSB);
    stroke(this.rippleHue, this.rippleSat, this.rippleBr, this.rippleAlpha);

    noFill();
    circle(this.rippleX, this.rippleY, this.diam);
  }

  checkWall() {
    this.bounceAlpha = this.rippleAlpha * 1.2;
    if (this.rippleX + this.diam / 2 >= width) {
      stroke(this.rippleHue, this.rippleSat, this.rippleBr, this.bounceAlpha);
      ellipse(
        this.rippleX + this.diam / 2,
        this.rippleY,
        this.bounceDiam,
        1.75 * this.bounceDiam
      );
    } else if (this.rippleX - this.diam / 2 <= 0) {
      stroke(this.rippleHue, this.rippleSat, this.rippleBr, this.bounceAlpha);
      ellipse(
        this.rippleX - this.diam / 2,
        this.rippleY,
        this.bounceDiam,
        1.75 * this.bounceDiam
      );
    } else if (this.rippleY + this.diam / 2 >= height) {
      stroke(this.rippleHue, this.rippleSat, this.rippleBr, this.bounceAlpha);
      ellipse(
        this.rippleX,
        this.rippleY + this.diam / 2,
        1.75 * this.bounceDiam,
        this.bounceDiam
      );
    } else if (this.rippleY - this.diam / 2 <= 0) {
      stroke(this.rippleHue, this.rippleSat, this.rippleBr, this.bounceAlpha);
      ellipse(
        this.rippleX,
        this.rippleY - this.diam / 2,
        1.75 * this.bounceDiam,
        this.bounceDiam
      );
    }
  }

  bounceUpdate() {
    this.bounceDiam += this.bounceSpeed;
    this.bounceAlpha *= random(0.85, 0.90);
  }
}
