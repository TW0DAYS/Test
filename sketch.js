// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let att;
let shape = 0;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, 350);
  att = new Attractor(20, height/2);
}

function draw() {
  background(255);
    
  repeller.setPower(mouseX);
  repeller.move(0.5);
  
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.run();

  repeller.show();
  att.show();

  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      shape = 0;
    } else if (keyCode === RIGHT_ARROW) {
      shape = 1;
    }
}
