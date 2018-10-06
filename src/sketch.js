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



function setup() {
    createCanvas(960, 540); // Canvas Size
    angleMode(DEGREES);

    // Spawning the blobs 
    blob1 = new Blob(ballColor, lineColor);
    enemy1 = new Blob(enemyBallColor, enemyLineColor);
    //enemy2 = new Blob(enemy2BallColor, enemy2LineColor);



    //////////////////////////////////////DEBUG MODE////////////////////////////////////////////////
    // enemy1.degrees = 180;
    // enemy1.clockwise = true;

    // enemy1.x2 = 373;
    // enemy1.y2 = 122;
    // enemy1.x1 = 300;
    // enemy1.y1 = 122;
    //////////////////////////////////////DEBUG MODE////////////////////////////////////////////////

}

function draw() {
    background(color(backgroundColor));

    blob1.update();
    enemy1.update();

    blob1.show();
    enemy1.show();

    console.log("BLUE")
    blob1.colided(enemy1);
    console.log("RED")
    enemy1.colided(blob1);
    console.log(" ");

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