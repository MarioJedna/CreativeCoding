const canvasSketch = require("canvas-sketch");
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080],
};

let degToRad = (deg) => {
  return (deg / 180) * Math.PI;
};

const randomRange = (min, max) => {
  return Math.random() * (max - min) * min;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "khaki";
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'salmon';
    context.strokeStyle='transparent';

    let cx = width/2;
    let cy = height/2;
    let w = width * 0.01;
    let h = height * 0.1;
    let x, y;

    const num = 12;
    const radius = width * 0.3;

    
    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360/num);
      const angle = slice * i;
      
       x =  radius * Math.sin(angle);
       y =  radius * Math.cos(angle);

      context.save();
      context.translate(cx, cy);
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(2,4), random.range(2,4));
      
      
      context.beginPath();
      context.rect(-w/2, -h/2, w, h);
      context.fill();
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
