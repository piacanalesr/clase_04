var x = 0;
var y = 0;
var pepito; //a x le digo que guarde este valor. si es == le pregunto si el valor es 0. si hago !== le consulto si es distinto de 0. sirve para el if
var a = 100;


function setup() {
  pepito = createCanvas(windowWidth, windowHeight);
  pepito.parent("cuerpo");
  pepito.position(0,0)
  pepito.style('z-index','-1');
  noStroke();
  frameRate(12);
}

function draw() {
  background (map(mouseX, 0, windowWidth, 0, 360),map(mouseY, 0, windowHeight, 0, 100),100)
  colorMode(HSB, 360, 100, 100);
  x = lerp(x, mouseX, 1.0);
  y = lerp(y, mouseY, 1.0);
  fill("white");

  if(a === 300){
    a = a - 1;
  } else {
    a = a + 1;
  }

  textSize(a);
  text("🦖", x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
