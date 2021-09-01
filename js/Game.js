class Game{

    constructor()
    {

    }


    getState()
    {
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })    
    }

    update(state)
    {
      database.ref('/').update({
          gameState:state
          
         
      })
    }
  async  start()
{if(gameState===0)
    {    player=new Player();
       // player.getCount();
       var playerCountRef=await database.ref('playerCount').once("value")
    
       if(playerCountRef.exists()){
           playerCount=playerCountRef.val()
           player.getCount();
       }
        form=new Form();
        form.display()
    }

}
play()
{
    form.formHide();
    textSize(30);
    text("GAME START",120,100);
player.getPlayerInfo();

if(allPlayers!=undefined)
{
    var ypos=130;

    for(var plr in allPlayers)
    {
        if(plr==="player"+player.index)
        {fill("red")}
        else
        {fill("black")}
        textSize(15)
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,ypos)
        ypos+=30
    }
}

    if(keyIsDown(UP_ARROW))
    {
        player.distance+=50;
        player.update()
    }
}

}