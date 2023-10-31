// class Mover {
//   constructor() {
//     this.position = createVector();
//     this.velocity = createVector();
//     this.acceleration = createVector();
//   }
// }
class Mover {
  // constructor() {
  //   this.position = createVector();
  //   this.velocity = createVector();
  //   this.acceleration = createVector();
  //   this.mass = 10;

  // }
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = 10;
  }
}

    // let moverA = new Mover();
    // let moverB = new Mover();
    // let wind = createVector(1, 0);
    // moverA.applyForce(wind);
    // moverB.applyForce(wind);
 // mover.applyForce(wind); //or mover.applyForce(gravity);
  //applyForce(force) {
 //   this.acceleration = force;
 //}

 // mover.applyForce(wind);
 // mover.applyForce(gravity);
 // mover.update();
 // this.velocity.add(this.acceleration);

  //  applyForce(force) {
  //   this.acceleration.add(force);
  // }
  // applyForce(force) {
  //   force.div(mass);
  //   this.acceleration.add(force);
  // }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }
  

  if (mouseIsPressed) {//마우스와 상호작용
    // let wind = createVector(0.5, 0);
    // mover.applyForce(wind);
    let wind = createVector(0.01, 0);
    mover.applyForce(wind);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }