let yoff = 0.0;
let sunPosition;
let sunColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sunPosition = createVector(width / 2, height);
  sunColor = color(255, 204, 0); 
}

function draw() {
  background(235);

  fill(sunColor);
  noStroke();
  ellipse(sunPosition.x, sunPosition.y, 100, 100); 


  fill(40,150,200);
  beginShape();
  let xoff = 0;
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 0.25, height/2, height/2 + 50);
    vertex(x, y);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function mouseClicked() {
  yoff = random(1000); 

  sunPosition = createVector(random(width), random(height));

  if (random(1) > 0.5) {
    sunColor = color(255, 204, 0);
  } else {
    sunColor = color(255, 99, 71);
  }
}