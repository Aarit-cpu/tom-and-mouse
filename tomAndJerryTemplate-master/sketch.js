var canvas,bg
var together
var tomImg1,tomImg2
var jerry , jerryImg1 , jerryImg2


function preload(){
    bg = loadImage("images/garden.png")
    tomeImg1 = loadAnimation("images/tomeOne.png")
    tomImg3 = loadAnimation("images/tomTwo.png","images/tomThree.png")
    jerryImg1 = loadAnimation("images/jerryOne.png")
    jerryImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    jerryImg3 = loadAnimation("images/jerryFour.png")

}


function setup(){
    canvas = createCanvas(1000.800)
tom = createSprite(870,600)
    tom.addAnimation("tomeSleepig",tomImg1)
    tome.scale = 0.2 

 jerry = createSprite(200,600)
    jerry.addAnimation("jerryStanding",jerryImg1)
    jerry.scale = 0.15
}


function draw(){

    background(bg)

    if(tome.x - jerry.x < (tome.width - jerry.width)/2)
    {

        tome.velocityX = 0
        tome.addAnimation("tomeLastImgae", tomeImg3)
        tome.x = 300
        tom.scale = 0.2
        tom.changeAnimation("tomLastImage")
        jerry.addAnimation("jerryLastImage", jerryImg3)
        jerry.scale = 0.15
        jerry.changeAnimation("jerryLastImage")
    }
    drawSprites()
}



function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5
        tome.addAnimation("tomRturnImg", tomImg2)
        tome.changeAnimation("tomRunning")

        jerry.addAnimation("jerryTeasImg", jerryImg2)
        jerry.frameDelay = -25
        jerry.changeAnimation("jerryTeasing")
    }
}