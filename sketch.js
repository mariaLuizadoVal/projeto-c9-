 
var box ;




function setup() {
  createCanvas(400,400);
  box = createSprite (200, 200, 30, 30);
  box.shapeColor = "black" ; 



}
 createEdgesSprites();
function draw() 
{
  background("pink");

  drawSprites ();

if (keyDown ("right")) {
 background ("orange");
}


if (keyDown ("left")) {
 background   ("blue");
}

if (keyDown ("down")) {
  background  ("purple");
 }


 if (keyDown ("up")) {
  background ("yelow");
 }
//box.bounceOff(rightEdge);
//box.bounceOff(leftEdge);
//box.bounceOff(topEdge);
//box.bounceOff(bottomEdge);


 
if (keyDown("right")) {
  box.x = box.x +3 ; 
}

if (keyDown("left")) {
  box.x = box.x -3 ; 

}

if (keyDown("up")) {
  box.y = box.y -3 ; 

}

if (keyDown("down")) {
  box.y = box.y +3 ; 

}



}





