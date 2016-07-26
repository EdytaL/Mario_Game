document.addEventListener("DOMContentLoaded", function(){
    
    //Variables 
    var myCanvas = document.querySelector("#canvas");
    
    
    var ctx = myCanvas.getContext("2d");
    var snakeSize = 10;
    var widthBoard = 350;
    var heightBoard = 350;
    var points = 0;
    var snake;
    var coin;
    
    
    //Draw snake body 
    function drawSnakeModule(){
        function snakeBody(snakePositionX,snakePositionY) {
        //This part draws single square of snake's body
            ctx.fillStyle = "black";
            ctx.fillRect(snakePositionX*snakeSize, snakePositionY*snakeSize, snakeSize, snakeSize)
        };
        snakeBody(20, 20)
    };
    drawSnakeModule();
})