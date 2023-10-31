class Mover {
  constructor() {
    this.position = createVector();
    this.velocity = createVector();
    this.acceleration = createVector();
  }
}
  mover.applyForce(wind); //or mover.applyForce(gravity);
  applyForce(force) {
    this.acceleration = force;
  }