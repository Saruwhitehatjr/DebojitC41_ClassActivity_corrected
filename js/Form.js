class  Form
{
    constructor()
    {
        this.title=createElement('h2')
        //this.title.html("Car Racing Game")
        this. input=createInput("Name");
        this. button =createButton("Play")
        this. greeting =createElement('h2') 
    }


    formHide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display()
    {
        //var title =createElement('h2')
       this. title.html("Car Racing Game")
        this.title.position(130,30)

     //   var input=createInput("Name");
      this.  input.position(130,160)

     //   var button =createButton("Play")
       this. button.position(250,200);

      //  var greeting =createElement('h2')        

      this.  button.mousePressed(()=>{
           this.input.hide()
          this.button.hide()

            player.name=this.input.value();

            playerCount+=1
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount);

            this.greeting.html("hello"+player.name)
           this.greeting.position(130,160)
        })
        }
}