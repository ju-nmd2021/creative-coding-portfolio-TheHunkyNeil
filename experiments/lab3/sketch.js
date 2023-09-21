let position;
let velocity;
let acceleration;

let position2;
let velocity2;
let acceleration2;

let angleX = 0;
let angleY = 0;

let lastMouseX;
let lastMouseY;

let drag = false;

let synth;
let notesC = ["c1", "c2", "c3"];
let notesD = ["d1", "d2", "d3"];
let notesE = ["e1", "e2", "e3"];
let notesF = ["f1", "f2", "f3"];
let notesG = ["g1", "g2", "g3"];
let notesA = ["a1", "a2", "a3"];
let notesB = ["b1", "b2", "b3"];

function setup() {
  createCanvas(800, 800, WEBGL);
  position = createVector(0, 0);
  velocity = createVector(5, 8);

  position2 = createVector(0, 100);
  velocity2 = createVector(-5, -8);

  synth = new Tone.Synth().toDestination();
}

function draw() {
  background(255);

  rotateX(angleX);
  rotateY(angleY);

  stroke(0);
  noFill();

  push();
  translate(position.x, position.y);
  sphere(50);
  pop();

  //The following 45 lines of code were inspired and adapted from https://ju.slides.com/garrit/cc-2023-complexity?token=AbjTIZo5#/5/7 Accessed: 2023-09-13
  if (position.x > 400) {
    velocity.x *= -1;
    let randomNoteA = random(notesA);
    synth.triggerAttackRelease(randomNoteA, "16n");
  } else if (position.x < -400) {
    velocity.x *= -1;
    let randomNoteB = random(notesB);
    synth.triggerAttackRelease(randomNoteB, "16n");
  }

  if (position.y > 400) {
    velocity.y *= -1;
    let randomNoteC = random(notesC);
    synth.triggerAttackRelease(randomNoteC, "16n");
  } else if (position.y < -400) {
    velocity.y *= -1;
    let randomNoteD = random(notesD);
    synth.triggerAttackRelease(randomNoteD, "16n");
  }

  const mouse = createVector(mouseX - 400, mouseY - 400, 0);

  acceleration = p5.Vector.sub(mouse, position);
  acceleration.normalize();
  acceleration.mult(0.2);

  velocity.add(acceleration);
  velocity.limit(10);
  position.add(velocity);

  acceleration2 = p5.Vector.sub(mouse, position2);
  acceleration2.mult(1.0);
  acceleration2.normalize();

  velocity2.add(acceleration2);
  velocity2.limit(10);
  position2.add(velocity2);

  if (position2.x > 400) {
    velocity2.x *= -1;
    let randomNoteE = random(notesE);
    synth.triggerAttackRelease(randomNoteE, "16n");
  } else if (position2.x < -400) {
    velocity2.x *= -1;
    let randomNoteE = random(notesE);
    synth.triggerAttackRelease(randomNoteE, "16n");
  }

  if (position2.y > 400) {
    velocity2.y *= -1;
    let randomNoteF = random(notesF);
    synth.triggerAttackRelease(randomNoteF, "16n");
  } else if (position2.y < -400) {
    velocity2.y *= -1;
    let randomNoteG = random(notesG);
    synth.triggerAttackRelease(randomNoteG, "16n");
  }

  push();
  translate(position2.x, position2.y);
  sphere(35);
  pop();

  if (drag) {
    let distanceX = mouseX - lastMouseX;
    let distanceY = mouseY - lastMouseY;

    angleY += distanceX * 0.01;
    angleX -= distanceY * 0.01;
  }

  lastMouseX = mouseX;
  lastMouseY = mouseY;
}

function mousePressed() {
  drag = true;
}

function mouseReleased() {
  drag = false;
}
