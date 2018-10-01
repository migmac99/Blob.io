const SPACE = 32;
const backgroundColor = '#1b1b1b';
const ballColor = '#0093c4'; //Purple
const lineColor = '#8bf6ff'; //Pink

const enemyBallColor = '#b4004e'; //Dark Pink
const enemyLineColor = '#ff94c2'; //Pink

var blob;
var enemy;

var distance = 10; // Distance between both balls
var speed = 5; // Speed of rotation


function setup() {
    createCanvas(600, 600); // Canvas Size
    angleMode(DEGREES);

    // Spawning the blobs 
    blob1 = new Blob(ballColor, lineColor);
    enemy = new Blob(enemyBallColor, enemyLineColor);
}

function draw() {
    background(color(backgroundColor));
    blob1.update();
    blob1.show();

    enemy.update();
    enemy.show();
}

function keyPressed() {
    if (keyCode == SPACE) {
        blob1.switch();
    } else if (keyCode == UP_ARROW) {
        enemy.switch();
    }

}