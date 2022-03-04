let w = window.innerWidth;
let h = window.innerHeight;
let img;
function preload() {
  img = loadImage('images/images.png');
}
function setup() {
  createCanvas(w, h);
}
let x = 0;
let y = 0;
let speed = 5;
let xmovement = speed;
let ymovement = speed;
let size = 0;
let height = 0;
let width = 0;
let color = 'red'
let newy = false
let newx = false

function draw() {

  w = window.innerWidth;
  h = window.innerHeight;
  size = window.innerHeight / 7;
  height = size;
  width = size;

  resizeCanvas(w,h)
  background(0);

  rect(x, y, height, width);
  image(img, x + width * .1, y + height * .1, width * .8, height * .8);
  fill(color)
  print(x,y);
  x += xmovement;
  y += ymovement;
  newx = false;
  newy = false;
  if (x > w - width) {
    xmovement = -speed;
    event()
    newx = true;
  }
  else if (x < 0) {
    xmovement = speed;
    event()
    newx = true;
  }

  if (y > h - height) {
    ymovement = -speed;
    event()
    newy = true;
  }
  else if (y < 0) {
    ymovement = speed;
    event()
    newy = true;
  }
  if (newx == true && newy == true) {
    ymovement = 0;
    xmovement = 0;

  }
}
function event() {
  color = '#' + Math.floor(Math.random()*16777215).toString(16);
}