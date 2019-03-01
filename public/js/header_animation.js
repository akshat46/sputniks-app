const canvas = document.getElementById('header_animation');
const con = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
let num_circles = 100;
let radius = 10;
let circles = [];
let requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

// Create circles
for(let i=0; i < num_circles; i++){
    let circle = {
        x: generateRandom(CANVAS_WIDTH - (2*radius)),
        y: generateRandom(CANVAS_HEIGHT - (2*radius)),
        dx: (Math.random()-0.5) *10,
        dy: (Math.random()-0.5) *10,
        color: generateRandomColor()
    }
    circles.push(circle);
}

function draw() {
    //Clear canvas
    con.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

    //Add background color to canvas
    con.fillStyle = '#AE94DE';
    con.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    //Add Circles to canvas
    for(let j=0; j < num_circles; j++) {
        let x  = circles[j].x;
        let y = circles[j].y;
        con.beginPath();
        con.arc(x, y, radius, 0, 2 * Math.PI, false);
        con.closePath()
        con.fillStyle = circles[j].color;
        con.fill();

        if (x > CANVAS_WIDTH || x < 0) {
            circles[j].dx *= -1;
        }
        if (y > CANVAS_HEIGHT || y < 0) {
            circles[j].dy *= -1;
        }

        circles[j].x += circles[j].dx;
        circles[j].y += circles[j].dy;
    }

    requestAnimationFrame(draw);
}

function generateRandom(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomColor() {
    let hex_value = '0123456789ABCDEF';
    let color = '#';
    for (let k = 0; k < 6; k++) {
        color += hex_value[Math.floor(Math.random() * 16)];
    }
    return color;
}
