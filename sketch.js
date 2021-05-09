//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dog1img = loadImage("images/dogImg.png");
  dog2img = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250, 450, 60,60);
  dog.addImage(dog1img);
  dog.scale = 0.5;
  
   
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2img);
    }
    drawSprites();
  textSize(35)
  fill("red")
  text("foodStock"+ foodS, 90,90);
  
}

//function to read values from database
function readStock(data)
{
  foodS = data.val();
}

//function to write values in database
function writeStock(x)
{
  if(x <= 0)
  {
     x = 0;
  }
  else
  {
    x = x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}


