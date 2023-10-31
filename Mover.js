class Mover {
  constructor() {
    this.position = createVector();
    this.velocity = createVector();
    this.acceleration = createVector();
  }
}
 // mover.applyForce(wind); //or mover.applyForce(gravity);
  //applyForce(force) {
 //   this.acceleration = force;
 //}

 // mover.applyForce(wind);
 // mover.applyForce(gravity);
 // mover.update();
 // this.velocity.add(this.acceleration);

   applyForce(force) {
    this.acceleration.add(force);
  }

  if (mouseIsPressed) {//마우스와 상호작용
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }