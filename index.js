let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');


context.fillStyle = '#44ea77';
//context.fillRect(50, 50, 300, 300);

context.beginPath();
context.rect(10, 10, 50, 50);
context.strokeStyle = 'red';
// context.lineWidth = 5;
context.stroke();

context.beginPath();
context.arc(200, 200, 120, 0, Math.PI * 2);
context.fillStyle = 'pink';
context.fill();


const w = 50;
const h = 50;
const gap = 20;
let x, y;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    x = 100 + (w + gap) * i;
    y = 100 + (h + gap) * j;
    context.beginPath();
    context.rect(x, y, w, h);
    context.strokeStyle = 'blue';
    context.stroke();
    if (Math.random() > .5) {
      context.beginPath();
      context.rect(x + 8, y + 8, w - 16, h - 16);
      context.strokeStyle = 'yellow';
      context.stroke();
    }
  }
}