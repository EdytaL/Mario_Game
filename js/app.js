document.addEventListener("DOMContentLoaded", function(){
    
    //Variables
    var myBorder = document.querySelector("body")
    var myCanvas = document.querySelector("#canvas");
    
    
    var ctx = myCanvas.getContext("2d");
    var snakeSize = 10;
    var coinSize = 10;
    var widthBoard = 350;
    var heightBoard = 350;
    var points = 0;
    var snake;
    var coin;
    var gameField = new Array(35);
    console.log(gameField)
    
    //Loop - in order to build game matrix 
    for(var i=0; i < gameField.length; i++) {
        gameField[i] = new Array(35)
    };
    
    
    //Draw snake body 
    function drawSnakeModule(){
        
        function drawSnakeBody(snakePositionX,snakePositionY) {
        //This part draws single square of snake's body
            ctx.fillStyle = "grey";
            ctx.fillRect(snakePositionX*snakeSize, snakePositionY*snakeSize, snakeSize, snakeSize);
        //This part draws border for single square of snake's body
            ctx.strokeStyle = "black";
            ctx.strokeRect(snakePositionX*snakeSize, snakePositionY*snakeSize, snakeSize, snakeSize)
            
        }
        
       
        
        
        function drawCoinToCollect () {
            
        //Generate random coins's position X and Y 
            var randomPositionX = Math.floor(Math.random() * 35) + 1;
            var randomPositionY = Math.floor(Math.random() * 35) + 1;
            
        //This part draws coin as single square
            ctx.fillStyle = "yellow";
            ctx.fillRect(randomPositionX*coinSize, randomPositionY*coinSize, coinSize, coinSize);
        //This part draws coin's border
            ctx.strokeStyle = "orange";
            ctx.strokeRect(randomPositionX*coinSize, randomPositionY*coinSize, coinSize, coinSize);
        }
        

        
        function pointsCounter (){
        //Count how many coins collected snake
            var pointsText = "Score " + points;
            ctx.fillStyle = "green";
            ctx.fillText(pointsText, 145, heightBoard-10);
        }
        drawSnakeBody(10, 10);
        drawCoinToCollect();
        pointsCounter();

    };
    drawSnakeModule();
    
    //Event activates when keyboard arrow is down
    myBorder.addEventListener("keydown",function(event) {
        
        switch(event.keyCode) {
            case 37:
                console.log("left");
            break;
            case 38:
                console.log("up");
            break;
            case 39:
                console.log("right");
            break;
            case 40:
                console.log("down");
            break;
        }
    },false);
    
    //Event on snake body; moves snake
    
    
//    function enlargeSnakeBody() {
//        //
//    }
})