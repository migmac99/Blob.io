const SPACE = 32;
const backgroundColor = '#1b1b1b';
const ballColor = '#0093c4'; //Purple
const lineColor = '#8bf6ff'; //Pink

const enemyBallColor = '#b4004e'; //Dark Pink
const enemyLineColor = '#ff94c2'; //Pink

const enemy2BallColor = '#f57f17'; //Orange
const enemy2LineColor = '#ffee58'; //Yellow

var blob;
var enemy1;
var enemy2;

var distance = 10; // Distance between both balls
var speed = 5; // Speed of rotation


function setup() {
    createCanvas(960, 540); // Canvas Size
    angleMode(DEGREES);

    // Spawning the blobs 
    blob1 = new Blob(ballColor, lineColor);
    enemy1 = new Blob(enemyBallColor, enemyLineColor);
    enemy2 = new Blob(enemy2BallColor, enemy2LineColor);
}

function draw() {
    background(color(backgroundColor));
    blob1.update();
    blob1.show();

    enemy1.update();
    enemy1.show();

    enemy2.update();
    enemy2.show();
}

function keyPressed() {
    if (keyCode == SPACE) {
        blob1.switch();
    } else if (keyCode == UP_ARROW) {
        enemy1.switch();
    } else if (keyCode == DOWN_ARROW) {
        enemy2.switch();
    }
}