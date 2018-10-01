const SPACE = 32;
const backgroundColor = '#1b1b1b';
const ballColor = '#0093c4'; //Purple
const lineColor = '#8bf6ff'; //Pink

var blob;

var distance = 10; // Distance between both balls
var speed = 5; // Speed of rotation


function setup() {
    createCanvas(600, 600); // Canvas Size
    angleMode(DEGREES);
    blob1 = new Blob(ballColor, lineColor); // Spawning the blob
}

function draw() {
    background(color(backgroundColor));
    blob1.update();
    blob1.show();
}

function keyPressed() {
    if (keyCode == SPACE) {
        blob1.switch();
    }
}