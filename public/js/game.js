let canvas = document.getElementById('game')
let brush = canvas.getContext('2d');
const CANVASWIDTH = canvas.width;
const CANVASHEIGHT = canvas.height;
let dx = 2, dy = 2;
const RADIUS = 10;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
let paddle_x = (CANVASWIDTH - PADDLE_WIDTH)/2;
let paddle_y = CANVASHEIGHT - PADDLE_HEIGHT;
let paddle_speed = 30;
let x = CANVASWIDTH/2;
let y = (CANVASHEIGHT-PADDLE_HEIGHT) - 1;
let rightpressed = false;
let leftpressed = false;
let game_status;
// let gamebutton = document.getElementsByClassName('game-button');

// gamebutton.onclick = function() {
//     game_status = setInterval(draw,10);
// }

document.addEventListener("keydown", movePaddle, false);
document.addEventListener("keyup", stopPaddle, false);

function drawCircle() {
    brush.fillStyle = '#AE94DE';
    brush.beginPath();
    brush.arc(x,y,RADIUS,0, 2*Math.PI, false);
    brush.closePath();
    brush.fill();
}

function drawPaddle() {
    brush.fillStyle = '#F8CB98';
    brush.fillRect(paddle_x, paddle_y, PADDLE_WIDTH, PADDLE_HEIGHT);
}

function movePaddle(event) {
    if(event.key == 'Right' || event.key == 'ArrowRight') {
        rightpressed = true;
        if(paddle_x < (CANVASWIDTH - PADDLE_WIDTH)) {
            paddle_x += paddle_speed;
            drawPaddle();
        }
    } else if (event.key == 'Left' || event.key == 'ArrowLeft') {
        leftpressed = true;
        if(paddle_x > 0) {
            paddle_x -= paddle_speed;
            drawPaddle();
        }
    }
}

function stopPaddle(event) {
    if(event.key == 'Right' || event.key == 'ArrowRight') {
        rightpressed = false;
    } else if (event.key == 'Left' || event.key == 'ArrowLeft') {
        leftpressed = false;
    }
}

function draw() {
    brush.clearRect(0,0,CANVASWIDTH,CANVASHEIGHT);
    brush.fillStyle = '#EEE';
    brush.fillRect(0,0,CANVASWIDTH,CANVASHEIGHT);
    drawPaddle();
    drawCircle();

    if ((x+dx) > (CANVASWIDTH-RADIUS) || (x+dx) < RADIUS) {
        dx *= -1;
    }
    if ((y+dy) < RADIUS) {
        dy *= -1;
    }
    else if((y+dy) > (CANVASHEIGHT-RADIUS)) {
        if(x > paddle_x && x < (paddle_x+PADDLE_WIDTH)) {
            dy *= -1;
        }
        else {
            alert("GAME OVER");
            reset();
        }
    }

    x += dx;
    y += dy;
    //requestAnimationFrame(draw);
}

function reset() {
    clearInterval(game_status);
    dx = 2, dy = 2;
    x = CANVASWIDTH/2;
    paddle_x = (CANVASWIDTH - PADDLE_WIDTH)/2;
    paddle_y = CANVASHEIGHT - PADDLE_HEIGHT;
    x = CANVASWIDTH/2;
    y = (CANVASHEIGHT-PADDLE_HEIGHT) - 1;
    draw();
}

function startGame() {
    game_status = setInterval(draw,10);
}

draw();