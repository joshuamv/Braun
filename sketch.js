let img;
let counter0 = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

function preload() {
  img = loadImage('logo.svg');
}

function setup() {
  createCanvas(860, 1200);
}

function draw() {
  background(5);
  noStroke();

  let blackFill = 20;
  let redFill = [224,70,50];
  let yellowFill = [234,185,50];
  let whiteFill = 220;
  let brownFill = [88,70,50];
  let greenFill = [40,110,63];
  let fillArray = [blackFill, redFill, yellowFill, whiteFill, brownFill, greenFill];

  counterFun();

  image(img, 610, 100, 100, 42);
  fill(fillArray[counter0]);
  ellipse(130, 555, 180);
  fill(fillArray[counter1]);
  ellipse(130, 750, 180);

  fill(fillArray[counter2]);
  ellipse(325, 750, 180);
  fill(fillArray[counter3]);
  ellipse(325, 945, 180);

  fill(fillArray[counter4]);
  ellipse(520, 750, 180);

  fill(fillArray[counter5]);
  ellipse(715, 750, 180);

  fill(240);
  textFont('Helvetica', 15);


  text(`
    Braun Audio
    Regie 308 Control Unit
    Dieter Rams, 1973`, 
  600, 400);

  text(`
    Walter Knoll
    London Showroom
    42 Charterhouse Square
    London EC1M 6EA`, 
  600, 1080);

  text(`
    systems

    25 November to
    31 December 2013`, 
  400, 1080);

}

function counterFun() {
  if (frameCount % 100 == 0){
    counter0=Math.floor(random(0,6)); 
    counter1=Math.floor(random(0,6)); 
    counter2=Math.floor(random(0,6)); 
    counter3=Math.floor(random(0,6)); 
    counter4=Math.floor(random(0,6)); 
    counter5=Math.floor(random(0,6)); 
    return; 
  }
}
