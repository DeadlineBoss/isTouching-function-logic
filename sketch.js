var fixedObject, movingObject;

function setup() {
  createCanvas(800,400);
  fixedObject = createSprite(400, 200, 50, 50);
  movingObject = createSprite(200,200, 50, 50);
}

function draw() {
  background(255,255,255);
  movingObject.x = mouseX;
  isTouching(fixedObject, movingObject);
  drawSprites();
}

function isTouching (object1, object2) {
  var distance = object1.width/2 + object2.width/2;
  var realDistance = object1.x -  object2.x;
  if (realDistance < 0) {
    realDistance = realDistance -(realDistance)*2;
  }
  if(realDistance > distance) {
    console.warn("Object not touching");
  }
  if(realDistance < distance || realDistance == distance) {
    console.warn("Object touching");
  }
  console.log(realDistance);
}