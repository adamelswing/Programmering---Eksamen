var state = 1;

function setup()
{
    createCanvas(1000, 600);
    asteroids = new Group();

    walls = new obstacles();
    walls.createWall(100);
}

function draw()
{
    if(state === 1)
    {
        drawMenu();
    }
    
    if(state === 2)
    {
        drawGame();
    }
    
    if(state === 3)
    {
        drawEnd();
        
        for(i = 0; i < allSprites.length; i++)
        {
            allSprites[i].remove();
        } 
    }
    
    drawSprites();
}

function drawMenu()
{
    background(255, 150, 0);
    rectMode(CENTER);
    rect(width/2, height/2, 120, 45);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("Start Game", width/2, height/2);
}

var clickCount = 0;

function drawGame()
{
    background(0,0,0);
    
    clickCount = clickCount + 1;
    
    drawAsteroids();
    
    if(clickCount % 480 == 0)
    {
        state = 3;
    }
    fill(50, 255, 50);
    text(clickCount, 50, 50);
}

function drawEnd()
{
    background(120, 120, 50);
    rectMode(CENTER);
    rect(width/2, height/2, 120, 45);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("Start Over", width/2, height/2);
}

function mousePressed()
{
    if(state === 1)                 // START MENU
    {
        if(mouseX < width/2 + 60 && mouseX > width/2 - 60 && mouseY < height/2 + 23 && mouseY > height/2 - 23)
        {
            state = 2;
        }
    }
    
    if(state === 3)                 // END MENU
    {
        if(mouseX < width/2 + 60 && mouseX > width/2 - 60 && mouseY < height/2 + 23 && mouseY > height/2 - 23)
        {
            state = 1;
            clickCount = 0;
        }
    }
}