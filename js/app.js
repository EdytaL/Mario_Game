document.addEventListener("DOMContentLoaded", function(){
    
    //Variables 
    var myCanvas = document.querySelector("#canvas");
    
    
    var ctx = myCanvas.getContext("2d");
    var snakeSize = 10;
    var coinSize = 10;
    var widthBoard = 350;
    var heightBoard = 350;
    var points = 0;
    var snake;
    var coin;
    
    
    //Draw snake body 
    function drawSnakeModule(){
        
        function drawSnakeBody(snakePositionX,snakePositionY) {
        //This part draws single square of snake's body
            ctx.fillStyle = "grey";
            ctx.fillRect(snakePositionX*snakeSize, snakePositionY*snakeSize, snakeSize, snakeSize);
        //This part draws border for single square of snake's body
            ctx.strokeStyle = "black";
            ctx.strokeRect(snakePositionX*snakeSize, snakePositionY*snakeSize, snakeSize, snakeSize)
        };
        
        
        function drawCoinToCollect (coinPositionX, coinPositionY) {
        //This part draws coin as single square
            ctx.fillStyle = "yellow";
            ctx.fillRect(coinPositionX*coinSize, coinPositionY*coinSize, coinSize, coinSize);
        //This part draws coin's border
            ctx.strokeStyle = "orange";
            ctx.strokeRect(coinPositionX*coinSize, coinPositionY*coinSize);
        }
        drawSnakeBody(20, 20);
        drawCoinToCollect(30, 30);
        
    };
    drawSnakeModule();
})