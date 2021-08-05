class Form {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset')
  }
hide(){
  this.input.hide()
  this.button.hide()
  

}
  display(){
    
    this.title.html("Car Racing Game");
    this.title.position(130, 0);
    
    
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);
    this.reset.position(displayWidth-100,50)

    this.reset.mousePressed(()=>{
    database.ref("/").update({
      gameState: 0,
      playerCount: 0

    })
    database.ref("players").remove()

    })

   this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()
      player.name = this.input.value()

  

      playerCount=playerCount+1
      player.index=playerCount
      
      player.updateCount(player.index)
      player.update()
      var greeting = createElement('h3')
      greeting.html("Hello " + player.name )
      greeting.position(130, 160)
      
   }
    )

  }
}
