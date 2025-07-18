const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = [];

class Heart {
  constructor(x, y, size, dx, dy) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    ctx.beginPath();
    ctx.font = `${this.size}px Arial`;
    ctx.fillText("❤️", this.x, this.y);
  }

  update() {
    this.y += this.dy;
    this.x += this.dx;
    if (this.y > canvas.height || this.x > canvas.width || this.x < 0) {
      this.y = -20;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

function init() {
  hearts = [];
  for (let i = 0; i < 50; i++) {
    let size = 24 + Math.random() * 10;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dx = (Math.random() - 0.5) * 1;
    let dy = 1 + Math.random() * 1;
    hearts.push(new Heart(x, y, size, dx, dy));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
}

init();
animate();
