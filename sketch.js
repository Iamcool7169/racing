var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;

var database;
var allPlayers
var form, player, game;
var car1, car2, car3, car4, cars
var c1, c2, c3, c4, t1
var track
function preload(){
c1=loadImage("car1.png")
c2=loadImage("car2.png")
c3=loadImage("car3.png")
c4=loadImage("car4.png")
t1=loadImage("track (1).jpg")
}


function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if(playerCount===4){
  game.update(1)

}
if(gameState===1){
  clear ()
  game.play()

}
if(gameState===2){
  game.End()

}

}
