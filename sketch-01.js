const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1000, 1000],
};

let list = [
  "slavia",
  "praha",
  "vzdycky",
  "jsme",
  "s",
  "vama",
  "po",
  "vyhre",
  "po",
  "prohre",
  "a",
  "proto",
  "...",
];
// console.log(list.length);
list.forEach((element) => {
  console.log(element);
});

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.strokeStyle='white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = 5;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.02;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
