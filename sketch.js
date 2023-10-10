let fireworks = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(0);

    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].display();

        if (fireworks[i].isFinished()) {
            fireworks.splice(i, 1);
        }
    }
}

function mousePressed() {
    for (let i = 0; i < 5; i++) {
        let firework = new Firework(mouseX, mouseY);
        fireworks.push(firework);
    }
}

class Firework {
    constructor(x, y) {
        this.position = createVector(x, y); 
        this.particles = [];
        this.hue = random(360); 
        this.exploded = false;

        this.speed = createVector(0, random(-17, -12)); 

        this.gravity = createVector(0, 0.2);
    }

    update() {
        if (!this.exploded) {
            this.speed.add(this.gravity);
            this.position.add(this.speed); 

            if (this.speed.y >= 0) {
                this.explode();
                this.exploded = true;
            }
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update();

            if (this.particles[i].isFinished()) {
                this.particles.splice(i, 1);
            }
        }
    }

    display() {
        if (!this.exploded) {
            fill(this.hue, 100, 100); 
            noStroke();
            ellipse(this.position.x, this.position.y, 10, 10); 
        }

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].display();
        }
    }

    isFinished() {
        return this.exploded && this.particles.length === 0;
    }

    explode() {
        for (let i = 0; i < 100; i++) {
            let velocity = p5.Vector.random2D().mult(random(2, 10));
            let particle = new Particle(this.position.x, this.position.y, this.hue, velocity);
            this.particles.push(particle);
        }
    }
}

class Particle {
    constructor(x, y, hue, velocity) {
        this.position = createVector(x, y); 
        this.hue = hue;
        this.velocity = velocity;
        this.gravity = createVector(0, 0.2);
        this.alpha = 255;
    }

    update() {
        this.velocity.add(this.gravity);
        this.position.add(this.velocity);
        this.alpha -= 3;
    }

    display() {
        colorMode(HSB);
        strokeWeight(2);
        stroke(this.hue, 100, 100, this.alpha); 
        point(this.position.x, this.position.y); 
        colorMode(RGB);
    }

    isFinished() {
        return this.alpha <= 0;
    }
}
