// script.js

class Heart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 2 + 1;
        this.size = Math.random() * 20 + 15; /* increased heart size */
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - this.size, this.y - this.size, this.x - this.size, this.y + this.size, this.x, this.y + this.size);
        ctx.bezierCurveTo(this.x + this.size, this.y + this.size, this.x + this.size, this.y - this.size, this.x, this.y);
        ctx.fillStyle = 'red'; /* red hearts */
        ctx.fill();
    }

    update() {
        this.y += this.speed;
    }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
for (let i = 0; i < 100; i++) {
    hearts.push(new Heart(Math.random() * canvas.width, Math.random() * -canvas.height));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].draw(ctx);
        hearts[i].update();
        if (hearts[i].y > canvas.height) {
            hearts[i].y = Math.random() * -canvas.height;
            hearts[i].x = Math.random() * canvas.width;
        }
    }
    requestAnimationFrame(animate);
}

animate();