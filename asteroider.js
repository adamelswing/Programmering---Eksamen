function drawAsteroids()
{
    if(clickCount % 120 == 0)
    {
        asteroid = createSprite(width, height/2);
        asteroid.addImage(asteroidImage);
        asteroid.setSpeed(10, 180);
        asteroid.life = 100;
        asteroid.rotateToDirection = true;
        asteroid.scale = 0.5;
        asteroids.add(asteroid);
    }
}