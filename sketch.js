var balloon, balloonAnimation;
var bg;
var database;

function preload() {
  bg = loadImage("Hot Air Ballon-01.png");
  balloonAnimation = loadAnimation("Hot Air Ballon-02.png", "Hot Air Ballon-03.png", "Hot Air Ballon-04.png");
}

function setup() {
  database = firebase.database();

  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("balloon_colorChange", balloonAnimation);
}

function draw() {
  background(bg);  
  drawSprites();
}