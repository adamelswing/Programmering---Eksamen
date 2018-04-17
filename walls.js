function preload() {
    pillarSprite1 = loadImage("assets/pillar1.png");
}

function obstacles() {
    this.createWall = function (gapSize) {
        wallHeight = 600;
        wallUpY = random(100,height-200);
        wallUp = createSprite(width + 100, wallUpY - 300);
        wallUp.addImage(pillarSprite1);
        wallUp.setSpeed(5, 180);
        wallDown = createSprite(width + 100, wallUpY - 300 + gapSize + wallHeight);
        wallDown.addImage(pillarSprite1);
        wallDown.setSpeed(5, 180);

    }
}