const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}
const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
}
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    /*
    // 黑色方塊
    context.fillStyle = 'black';
    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;

    context.save();
    // context.translate(x, y);
    // context.rotate(0.3);

    context.beginPath();
    context.rect(x, y, w, h);
    //context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.restore();

    */

    // 紅色圓圈
    // context.beginPath();
    // context.fillStyle = 'red';
    // context.arc(0, 0, 30, 0, Math.PI * 2);
    // context.fill();

    /*
    context.fillStyle = 'black';
    // 中心點 x, y
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 50;
    // 圓的半徑
    const radius = width * 0.3;
    for (let i = 0; i < num; i++) {
      // 單塊的角度
      const slice = math.degToRad(360 / num);
      // 每一塊實際的角度
      const angle = slice * i;

      // 鐘面
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);
      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));
  
      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      // 圓弧
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(3, 15);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.stroke();
      context.restore();
    }

   */
  };
};

canvasSketch(sketch, settings);


// 以矩形中央作圖時
// const num = 12;  配上 const slice = degToRad(360 / num);
// 會等於
// const num = 6;  配上 const slice = degToRad(180 / num);