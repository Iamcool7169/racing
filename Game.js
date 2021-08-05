class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()   
      form.display();
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    car1.addImage("c11",c1)
    car2.addImage("c22",c2)
    car3.addImage("c33",c3)
    car4.addImage("c44",c4)
    cars=[car1,car2,car3,car4]


  }
  play(){
    form.hide()
    Player.getPlayerInfo()
    player.getCarsAtEnd()

    if(allPlayers!==undefined){
      image (t1,0,-displayHeight*4,displayWidth,displayHeight*5)
      var index=0
      var x=250
      var y
      for(var plr in allPlayers){
        index=index+1
        x=x+300
        y=displayHeight-allPlayers[plr].distance
      cars[index-1].x=x
      cars[index-1].y=y
      if(index===player.index){
        fill ("red")
        ellipse(x,y,60,60)
        cars[index-1].shapeColor="red"
        camera.position.y=cars[index-1].y


      }

      }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=50
      player.update()

    }
    if(player.distance>5550){
      gameState=2
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)

    }


    drawSprites()
  }
  End(){
    console.log("gameEnded")
    console.log(player.rank)
    




  }




}
