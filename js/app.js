document.addEventListener("DOMContentLoaded", function(){
    
    //Variables - DOM searching
    var myBorder = document.querySelector("body")
    var myCanvas = document.querySelector("#canvas");
    var ctx = myCanvas.getContext("2d");
    var buttonStart = document.querySelector("#btn");
    
    //Variables game's elements (snake, coin, piont)
    var snakeSize = 10;
    var snakePositionX = 0;
    var snakePositionY = 15;
    
    var coinSize = 10;
    var points = 0;
    var snake = new Array(2);
    var coin;
    var snakeLenght = 2;
    
    //Variables game field
    var widthBoard = 350;
    var heightBoard = 350;
    var gameField = new Array(35);
    var frameLength = 500; //new frame every 0.5 seconds
    
    //Loop - in order to build game matrix 
    for(var i=0; i < gameField.length; i++) {
        gameField[i] = new Array(35)
    };
    
//buttonStart.addEventListener("click", function(event) { setInterval(function(){   
    //Draw snake body 
    function drawSnakeModule(){
        
        function drawSnakeBody(snakePositionX, snakePositionY) {
        //This part draws single square of snake's body
            ctx.fillStyle = "grey";
            ctx.fillRect(snakePositionX*snakeSize, snakePositionY*snakeSize, snakeSize, snakeSize);
            
        //This part draws border for single square of snake's body
            ctx.strokeStyle = "black";
            ctx.strokeRect(snakePositionX*snakeSize, snakePositionY*snakeSize, snakeSize, snakeSize)
            
//            snakeMove();
        };
        
        function snakeMove() {
              
            drawSnakeBody(10,10);
            
            snakePositionX += 1;
            ctx.clearRect(0, 0, 350, 350); //clear the canvas
            ctx.fillRect(snakePositionX,snakePositionY, 10, 10); //a moving snake
            ctx.strokeRect(snakePositionX,snakePositionY, 10, 10); //a moving snake
            setTimeout(snakeMove, frameLength); //do it all again
        }
        
        snakeMove()
        
         //Event activates when keyboard arrow is down
        myBorder.addEventListener("keydown", function(event) {
        
            switch(event.keyCode) {
            case 37: //Left
                console.log("left");
            break;
            case 38: //Up
                console.log("up");
            break;
            case 39: //Right
                console.log("right");
            break;
            case 40: //Down
                console.log("down");
            break;
            }
        return gameField[snakePositionX][snakePositionY];
        },false);
        
        
        
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
            
        //Check the position of snake's body; coin can't be on the same position
            
            for(var i=0; i>snake.length; i++){
                var snakeX = snake[i].x;
                var snakeY = snake[i].y;
                console.log(snakeX);
            }
            
        }
        
        
        function pointsCounter (){
        //Count how many coins collected snake
            var pointsText = "Score " + points;
            ctx.fillStyle = "green";
            ctx.fillText(pointsText, 145, heightBoard-10);
        }
//        drawSnakeBody(snakePositionX, snakePositionY);
//        drawCoinToCollect();
        pointsCounter();
        
        function enlargeSnakeBody() {
            var snakeX = snake[0].x;
            var snakeY = snake[0].y;
            
            if (direction === "right") {
                snakeX++;
            } else if (direction === "left") {
                snakeX--;
            } else if (direction === "up") {
                snakeY--;
            } else if (direction === "down") {
                snakeY++;
            };
            
            if (snakeX === -1 || snakeX === 36 || snakeY ==-1 || snakeY === 36) {
                alert("Game over")
            };
        }

    };
    drawSnakeModule();
    
//}), 5000});
    
    
})