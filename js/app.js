document.addEventListener("DOMContentLoaded", function(){
    
	//Variables - DOM searching
	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");
    var btnStart = document.querySelector("#start");
    var btnStop  = document.querySelector("#stop");
    var divAlert = document.querySelectorAll(".alert");
    var navPoints = document.querySelector(".points");
    var scoreDiv = navPoints.lastElementChild;
    var parAlert = divAlert[0].firstElementChild;
    
    
    
    //Variables game field
	var widthBoard = 350;
	var heighBoard = 350;
	
	//Variables game's elements (snake, coin, point)
	var cellSize = 10;
	var direction;
	var coin;
	var score = 0;
	
	var snake; 
    
	
	function init(){
        
        //Initialize game
		direction = "right"; //default direction
		drawSnakeBody();
		drawCoin(); 
		
		//Set interval for moving snake   
        if(typeof game_loop != "undefined"){ clearInterval(game_loop);
        };
            
        game_loop = setInterval(createElements, 120);
       
        //When btnStop is down, stop and restart game; reset var score                         
        btnStop.addEventListener("click", function(event) {
            clearInterval(game_loop);
            score = 0;
        })
        
	};
    
    btnStart.addEventListener("click", function(event) {
        
        for(var i=0; i < divAlert.length; i++) {
            
        divAlert[i].classList.remove("alert");
        divAlert[i].classList.add("alert-move");
        
        }
        btnStop.classList.remove("hidden"); navPoints.firstElementChild.classList.remove("hidden");
        navPoints.lastElementChild.classList.remove("hidden");
        init();  
        
        parAlert.parentNode.removeChild(parAlert);
    })
	
	
	function drawSnakeBody(){
        //Draws snake body 
		var length = 3; //base lenght of snake
		snake = []; 
        
		for(var i = length-1; i>=0; i--)
		{
			snake.push({x: i, y:0});
		}
	};
	
	
	function drawCoin(){
        //Generates random coins's position X and Y 
	
		coin = {
                x: Math.floor(Math.random() * (widthBoard/cellSize)),
                y: Math.floor(Math.random() * (heighBoard/cellSize))};
            
	}
	
	
	function createElements(){
        
		//Draw the game field
		ctx.fillStyle = "#E3AE57";
		ctx.fillRect(0, 0, widthBoard, heighBoard);
		
		var snakePositionX = snake[0].x;
		var snakePositionY = snake[0].y;
		
        
        //Statements -  move snake depend of keydown
		if (direction == "right"){            
            snakePositionX++;
        } else if (direction == "left"){      
            snakePositionX--;
        } else if(direction== "up") {        
            snakePositionY--;
        } else if(direction == "down"){      
            snakePositionY++;
        }
		
		//Collision statement - if snake is on the border of canvas - reset game
		if(snakePositionX == -1 || snakePositionX == widthBoard/cellSize || snakePositionY == -1 || snakePositionY == heighBoard/cellSize || checkCollision(snakePositionX, snakePositionY, snake))
		{
			alert("Game over");
            score = 0;
//            init();  
            return;
		}
		
		//Snake collect the coin
		if(snakePositionX == coin.x && snakePositionY == coin.y)
		{
			var snakeTail = {x: snakePositionX, y: snakePositionY};
			score++;
			//Create new coin
			drawCoin();
		}
		else
		{
			var snakeTail = snake.pop(); 
			snakeTail.x = snakePositionX; snakeTail.y = snakePositionY;
		}
		
		
		snake.unshift(snakeTail); //puts back the snakeTail as the first cell
		
		for(var i = 0; i < snake.length; i++)
		{
			var cell = snake[i];
			//Lets createElements 10px wide cells
			createCell(cell.x, cell.y);
		}
		
		
		createCell(coin.x, coin.y);
        
		//Add text in scoreDic when snake takes coins
		var score_text = "Score: " + score;
//		ctx.fillText(score_text, 5, heighBoard-5);
        scoreDiv.innerText = score_text;
	}
	
	
	function createCell(x, y){ 
        //Draw elements of the body of snake
		ctx.fillStyle = "#DC3D24";
		ctx.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*cellSize, y*cellSize, cellSize, cellSize);
	}
	
	function checkCollision(x, y, array){
		
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			 return true;
		}
		return false;
	}
	
	//Lets add the keyboard controls now
	document.addEventListener("keydown", function(event){
        
        //By this event we can controll position of snake
		var key = event.which;
		
		if(key == "37" && direction != "right") direction = "left";
		else if(key == "38" && direction != "down") direction = "up";
		else if(key == "39" && direction != "left") direction = "right";
		else if(key == "40" && direction != "up") direction = "down";
		
	})
	
	
	
	
	
	
	
})