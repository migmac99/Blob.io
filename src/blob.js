function Blob(blobColor, lineColor) {
    this.score = 0;

    this.blobColor = blobColor; // blob's color
    this.lineColor = lineColor; // line color

    this.size = 24; // Diameter of each ball
    this.axisLen = 60; // Distance between balls
    this.speed = 2.5; // Rotation speed


    this.degrees = 0; // initial angle

    this.centre = true; // if this.centre (true) then Ball 1 IS ROTATING
    this.clockwise = true; // direction of spin

    this.x1 = random(width);
    this.y1 = random(height);
    this.x2 = this.x1 + this.axisLen;
    this.y2 = this.y1;

    this.hit = false; // if collision w another ball [hit = true]
    //this.coliding = false;


    this.show = function() { // Function to display the blob
        // draw axis
        // stroke(this.lineColor);
        // strokeWeight(5);
        // line(this.x1, this.y1, this.x2, this.y2);

        // draw balls
        noStroke();
        fill(this.blobColor);
        ellipse(this.x1, this.y1, this.size, this.size);
        ellipse(this.x2, this.y2, this.size, this.size);
    }

    this.update = function() {
        // this is good pasta, not spaghetto :3
        this.degrees = (this.degrees + this.speed * (this.clockwise ? -1 : 1)) % 360;
        let radians_ = this.degrees * Math.PI / 180;

        if (this.centre) {
            this.x1 = this.x2 + Math.cos(radians_) * this.axisLen;
            this.y1 = this.y2 + Math.sin(radians_) * this.axisLen;
        } else {
            this.x2 = this.x1 + Math.cos(radians_) * this.axisLen;
            this.y2 = this.y1 + Math.sin(radians_) * this.axisLen;
        }

        this.checkBorders();
    }

    this.switch = function() {
        this.bounce();
        this.changeCenter();
    }

    // change spin direction
    this.bounce = function() {
        this.clockwise = !this.clockwise;
    }

    // change center
    this.changeCenter = function() {
        this.centre = !this.centre;
        this.degrees += 180;
    }

    this.getPosition = function() {
        /*
        c - center coordinate
        o - orbit coordinate
        */
        if (this.centre) {
            return {
                cx: this.x2,
                cy: this.y2,
                ox: this.x1,
                oy: this.y1
            };
        } else {
            return {
                cx: this.x1,
                cy: this.y1,
                ox: this.x2,
                oy: this.y2
            };
        }
    }

    // check if coliding with borders
    this.checkBorders = function() {
        let radius = this.size / 2;
        if (this.x1 - radius <= 0 || this.x1 + radius >= width ||
            this.x2 - radius <= 0 || this.x2 + radius >= width ||
            this.y1 - radius <= 0 || this.y1 + radius >= height ||
            this.y2 - radius <= 0 || this.y2 + radius >= height) {
            this.bounce();
        }
    }

    // check if coliding with other blob
    this.colided = function(other) {
        let ourPos = this.getPosition();
        let otherPos = other.getPosition();

        // test orbit vs orbit
        // TODO: Fazer bounce só se estiver a bater com a "barriga"
        if (collideCircleCircle(
                ourPos.ox, ourPos.oy, this.size,
                otherPos.ox, otherPos.oy, other.size)) {
            console.log("Our Orbit vs Other Orbit");
            this.bounce();
            return;
        }

        // test our orbit vs other centre
        if (collideCircleCircle(
                ourPos.ox, ourPos.oy, this.size,
                otherPos.cx, otherPos.cy, other.size)) {
            console.log("Our Orbit vs Other Centre")
            this.bounce();
            return;
        }

        // test our centre vs other orbit
        if (collideCircleCircle(
                ourPos.cx, ourPos.cy, this.size,
                otherPos.ox, otherPos.oy, other.size)) {

            console.log("Our Centre vs Other Orbit");
            if (this.clockwise == other.clockwise) {
                this.switch();
            } else {
                this.changeCenter();
            }
        }
    }
}