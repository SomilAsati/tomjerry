var bgImg;
var catimg1;
var mouseimg1;
var catimg2;
var mouseimg2;

function preload() {
    //load the images here
    bgImg = loadImage("add image url here");
    catimg1 = loadImage("image/cat1.png");
    mouseimg1 = loadImage("image/mouse1.png");
    catimg = loadImage("add cat2 and cat3 image url here");
    catimg = loadImage("add mouse2 and mouse3 image url here");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bgImg = createSprite("400,200,80,30");
    catimg1 = createSprite("200,400,50.30");
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if(catimg1.x - mouseimg1.x < (cat.width - mouseimg1.width)/2){

   }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    Mouse.AddAnimation("mouseTeasing",mouseimg2);
    mouseimg1.changeAnimation("mouseTeasing");
    mouseimg1.frameDelay = 25;
}

  if(keyCode === LEFT_ARROW){
      Mouse.AddAnimation("mouseTeasing",mouseimg2);
      mouseimg1.changeAnimation("mouseTeasing");
      mouseimg1.frameDelay = 25;
  }

}
