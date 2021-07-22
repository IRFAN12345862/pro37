class Form{
    constructor(){
        this.title=createElement("h2");   
        this.input = createInput("name")
        this.button= createButton("play") 
        this.greeting=createElement("h4")
    }
    display(){

this.title.html("car racing game");
this.title.position(130,0)

this.input.position(130,160);
this.button.position(250,200);

this.button.mousePressed(
    ()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount=playerCount+1;

        player.updateCount(playerCount);
        this.greeting.html("welcome back "+player.name)
        this.greeting.position(130,100)

    }
)



    }
}