let bc;

function createBigCube(){
  bc = new Clickable(1000,360);
  bc.resize(90,90);
  bc.color = "orange";
  bc.text = "";
  bc.strokeWeight = 0;
  bc.onPress = function(){
    bc.isPressed = true;
  }
  bc.onRelease = function(){
    bc.isPressed = false;
    checkBigCube();
    bc.x = Math.floor(bc.x / 30)*30
    bc.y = Math.floor(bc.y / 30)*30
    placeBigCube();
    checkForThree();
  }
}//end createCube

function checkBigCube(){
  if(bc.x < 30){
    //the shape off the grid to the left.
    bc.x = 30;
  }
  if(bc.y < 30){
    //the shape off the grid top.
    bc.y = 30;
  }
  if(bc.x > 300){
    //the shape off the grid to the right.
    bc.x = 270;
  }
  if(bc.y > 300){
    //the shape off the grid bottom.
    bc.y = 270;
  }
}

function placeBigCube(){
  let thisX = bc.x / 30 - 1;
  let thisY = bc.y / 30 - 1;
  g[thisX][thisY].color = bc.color;
  g[thisX + 1][thisY].color = bc.color;
  g[thisX][thisY + 1].color = bc.color;
  g[thisX + 1][thisY + 1].color = bc.color;
  g[thisX + 2][thisY].color = bc.color;
  g[thisX][thisY + 2].color = bc.color;
  g[thisX + 2][thisY + 1].color = bc.color;
  g[thisX + 1][thisY + 2].color = bc.color;
  g[thisX + 2][thisY + 2].color = bc.color;

  bc.x = 600
  
  
  
}
