function setup() {
  createCanvas(800, 600);
  background(235);

  //sun
  noStroke();
  fill(255, 0, 0);
  ellipse(130, 200, 80, 80);

  let mountainColors = [
    color(135, 150, 135),
    color(110, 130, 110),
    color(85, 105, 85),
    color(60, 80, 60),
  ];

  //fill mountain color
  for (let i = 0; i < 4; i++) {
    fill(mountainColors[i]);

    //mountain shape
    beginShape();

    // The following 7 lines of code were inspired and adapted from https://p5js.org/examples/math-noise-wave.html, https://p5js.org/reference/#/p5/noise, https://genekogan.com/code/p5js-perlin-noise/, https://p5js.org/reference/#/p5/map Accessed: 2023-08-31
    let yOff = map(i, 0, 3, 0, 50);
    for (let x = 0; x <= 800; x += 1) {
      let y = map(noise(x * 0.0035, yOff), 0, 1, 200, 600);
      y = y + i * 50;
      vertex(x, y);
    }
    vertex(800, 600);
    vertex(0, 600);

    endShape(CLOSE);
  }
}
