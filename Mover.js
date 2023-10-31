// // class Mover {
// //   constructor() {
// //     this.position = createVector();
// //     this.velocity = createVector();
// //     this.acceleration = createVector();
// //   }
// // }
// class Mover {
//   // constructor() {
//   //   this.position = createVector();
//   //   this.velocity = createVector();
//   //   this.acceleration = createVector();
//   //   this.mass = 10;

//   // }
//   constructor() {
//     this.position = createVector(random(width), random(height));
//     this.velocity = createVector(0, 0);
//     this.acceleration = createVector(0, 0);
//     this.mass = 10;
//   }
// }

//     // let moverA = new Mover();
//     // let moverB = new Mover();
//     // let wind = createVector(1, 0);
//     // moverA.applyForce(wind);
//     // moverB.applyForce(wind);
//  // mover.applyForce(wind); //or mover.applyForce(gravity);
//   //applyForce(force) {
//  //   this.acceleration = force;
//  //}

//  // mover.applyForce(wind);
//  // mover.applyForce(gravity);
//  // mover.update();
//  // this.velocity.add(this.acceleration);

//   //  applyForce(force) {
//   //   this.acceleration.add(force);
//   // }
//   // applyForce(force) {
//   //   force.div(mass);
//   //   this.acceleration.add(force);
//   // }

//   applyForce(force) {
//     let f = force.copy();
//     f.div(this.mass);
//     this.acceleration.add(f);
//   }
  

//   if (mouseIsPressed) {//마우스와 상호작용
//     // let wind = createVector(0.5, 0);
//     // mover.applyForce(wind);
//     let wind = createVector(0.01, 0);
//     mover.applyForce(wind);
//   }

//   update() {
//     this.velocity.add(this.acceleration);
//     this.position.add(this.velocity);
//     this.acceleration.mult(0);
//   }


// let gravity = createVector(0, 0.1);
// mover.applyForce(gravity);

// if (mouseIsPressed) {
//   let wind = createVector(0.1, 0);
//   mover.applyForce(wind);
// }

class Mover {
  constructor() {
    this.mass = 1;

    this.position = createVector(width / 2, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {

    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);


    this.acceleration.mult(0);
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.position.x, this.position.y, this.mass * 16);

  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }


    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;

    }
  }
}

// let moverA = new Mover();
// let moverB = new Mover();

// constructor() {
//   this.mass = 1;
//   this.position = createVector(width / 2, 30);

//   this.velocity = createVector(0, 0);
//   this.acceleration = createVector(0, 0);
// }

// constructor(x, y, mass) {
//   this.mass = mass;
//   this.position = createVector(x, y);
//   this.velocity = createVector(0, 0);
//   this.acceleration = createVector(0, 0);
// }

// let moverA = new Mover(100, 30, 10);
// let moverB = new Mover(400, 30, 2);