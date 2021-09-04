var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img1 = new Image();
img1.src = 'dino.png';

var dino = {
    x: 10,
    y: 185,
    width: 68,
    height: 65,
    draw() {
        ctx.fillStyle = 'green';
        ctx.drawImage(img1, this.x, this.y);
    }
}

var img2 = new Image();
img2.src = 'cactus.png';

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 182;
        this.width = 51;
        this.height = 68;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.drawImage(img2, this.x, this.y);
    }
}

var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var animation;

function 프레임마다실행할거() {
    animation = requestAnimationFrame(프레임마다실행할거)
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 170 === 0){
        var cactus = new Cactus();
        cactus여러개.push(cactus);
    }

    cactus여러개.forEach((a, i, o) => {
        // x좌표가 0미만이면 제거
        if (a.x < 0) {
            o.splice(i, 1);
        }
        a.x-=3;

        충돌하냐(dino, a);
        a.draw();
    })

    if (점프중 == true) {
        dino.y -=3;
        점프timer++;
    }
    if (점프중 == false) {
        if (dino.y < 185) {
            dino.y+=3;
        }
    }
    if (점프timer > 50) {
        점프중 = false;
        점프timer = 0;
    }
    dino.draw();
}

프레임마다실행할거();

// 충돌확인
function 충돌하냐(dino, cactus) {
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);

    if (x축차이 < 0 && y축차이 < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}


var 점프중 = false;
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        점프중 = true;
    }
})