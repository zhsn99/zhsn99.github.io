import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";

const Sketch = p5 => {
  let angle = 0;
  const scale = 1.5;
  const planets = [
    { r: 60 * scale, size: 10 * scale, speed: 0.02, color: [100, 255, 218] }, // Mercury
    { r: 90 * scale, size: 16 * scale, speed: 0.015, color: [200, 200, 200] }, // Venus
    { r: 130 * scale, size: 18 * scale, speed: 0.01, color: [100, 180, 255] }, // Earth
    { r: 170 * scale, size: 14 * scale, speed: 0.008, color: [255, 100, 100] }, // Mars
    { r: 220 * scale, size: 30 * scale, speed: 0.006, color: [255, 220, 100] }, // Jupitersun
    { r: 280 * scale, size: 24 * scale, speed: 0.005, color: [200, 200, 150] }, // Saturn
    { r: 340 * scale, size: 20 * scale, speed: 0.004, color: [100, 200, 255] }, // Uranus
    { r: 390 * scale, size: 20 * scale, speed: 0.003, color: [100, 150, 255] }, // Neptune
  ];
  let stars = [];
  const numStars = 200;

  p5.setup = () => {
    p5.createCanvas(1000, 1000, p5.WEBGL);
    // Generate random stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: p5.random(-800, 800),
        y: p5.random(-800, 800),
        z: p5.random(-800, 800),
        twinkle: p5.random(0, Math.PI * 2)
      });
    }
  };

  p5.draw = () => {
    p5.background(10, 25, 47);
    p5.push();
    p5.rotateX(-0.5);
    p5.rotateY(angle * 0.2);

    // Draw twinkling stars
    for (let s of stars) {
      p5.push();
      p5.translate(s.x, s.y, s.z);
      let tw = 180 + 75 * Math.sin(angle * 2 + s.twinkle);
      p5.stroke(255, 255, 255, tw);
      p5.strokeWeight(2);
      p5.point(0, 0, 0);
      p5.pop();
    }

    // Draw the sun
    p5.push();
    p5.noStroke();
    p5.pointLight(255, 255, 180, 0, 0, 0);
    p5.fill(0, 0, 255);
    p5.sphere(40 * scale);
    p5.pop();

    // Draw planets and orbits
    for (let i = 0; i < planets.length; i++) {
      const planet = planets[i];
      // Orbit
      p5.push();
      p5.noFill();
      p5.stroke(100, 255, 218, 60);
      p5.ellipse(0, 0, planet.r * 2, planet.r * 2);
      p5.pop();
      // Planet
      const theta = angle * planet.speed * 50 + i * 0.5;
      const x = planet.r * Math.cos(theta);
      const y = planet.r * Math.sin(theta);
      p5.push();
      p5.noStroke();
      p5.fill(...planet.color);
      p5.translate(x, y, 0);
      p5.sphere(planet.size);
      p5.pop();
    }
    p5.pop();
    angle += 0.01;
  };
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
