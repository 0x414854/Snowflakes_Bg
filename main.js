const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

class Snowflake {
  constructor() {
    this.x = Math.random() * canvas.width; 
    this.y = -10 - Math.random() * 20; 
    this.speed = Math.random() * 2 + 1; 
    this.size = Math.random() * 3 + 9; 
    this.direction = Math.random() * Math.PI * 2; 
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = '#fff'; 
    ctx.arc(this.x, this.y, this.size / 4, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.x += Math.cos(this.direction) * this.speed; 
    this.y += Math.sin(this.direction) * this.speed; 
    if (this.y > canvas.height + this.size) {
      const index = snowflakes.indexOf(this);
      if (index !== -1) {
        snowflakes.splice(index, 1);
      }
    }
  }
}

function createSnowflakes() {
    setInterval(() => {
      for (let i = 0; i < 50; i++) {
        const snowflake = new Snowflake();
        snowflakes.push(snowflake);
      }
    }, 200);
}  

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach((snowflake) => {
    snowflake.draw();
    snowflake.update();
  });
  requestAnimationFrame(drawSnowflakes);
}

createSnowflakes();
drawSnowflakes();
