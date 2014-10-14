var snake;

var context;
var screenWidth;
var screenHeight;

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getCanvas("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    
}

function gameDraw() {
    context.fillStyle = "rgb(7,219,0)";
    context,fillRect(0,0,screenWidth,screenHeight);
}