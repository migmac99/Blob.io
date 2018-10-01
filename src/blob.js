function Blob(blobColor, lineColor) {
    this.score = 0;

    this.blobColor = blobColor; // blob's color
    this.lineColor = lineColor; // line color

    this.size = 25; // Diameter of each ball
    this.axisLen = 60; // Distance between balls
    this.speed = 2.5; // Rotation speed


    this.degrees = 0;

    this.centre = true; // if this.centre (true) then Ball 1 is the centre of spin
    this.clockwise = true; // direction of spin

    this.x1 = random(width);
    this.y1 = random(height);
    this.x2 = this.x1 + this.axisLen;
    this.y2 = this.y1;

    this.show = function() { // Function to display the blob
        // draw axis
        stroke(this.lineColor);
        strokeWeight(5);
        line(this.x1, this.y1, this.x2, this.y2);

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

        // console.log('Centre [', this.centre, ']    Clockwise [', this.clockwise, ']');
    }

    this.switch = function() {
        this.centre = !this.centre;
        this.clockwise = !this.clockwise;
        this.degrees += 180;
    }

    // check if coliding with borders
    this.checkBorders = function() {
        let radius = this.size / 2;
        if (this.x1 - radius < 0 || this.x1 + radius > width) {
            this.clockwise = !this.clockwise;
        }
        if (this.x2 - radius < 0 || this.x2 + radius > width) {
            this.clockwise = !this.clockwise;
        }
        if (this.y1 - radius < 0 || this.y1 + radius > height) {
            this.clockwise = !this.clockwise;
        }
        if (this.y2 - radius < 0 || this.y2 + radius > height) {
            this.clockwise = !this.clockwise;
        }
    }

    this.colided = function() {}
}