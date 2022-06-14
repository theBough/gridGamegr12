let c;

function createCube(){
  c = new Clickable(1000,360);
  c.resize(60,60);
  c.color = "green";
  c.cornerRadius = 0;
  c.text = "";
  c.onPress = function(){
    c.isPressed = true;    
  }
  c.onRelease = function(){
    c.isPressed = false;
    checkCube();
    c.x = Math.floor(c.x / 30)*30;
    c.y = Math.floor(c.y / 30)*30;
    let thisRow = c.y / 30 - 1
    placeCube();
    if(isRowComplete(thisRow)){
      changeRowColor(thisRow)
    }
    if(isRowComplete(thisRow+1)){
      changeRowColor(thisRow+1)
    }
    checkForThree();
  }
}//end createCube
function checkCube(){
  if(c.x < 30){
    //the shape off the grid to the left.
    c.x = 30;
  }
  if(c.y < 30){
    //the shape is off the top of 
    //the grid.
    c.y = 30;
  }
  if(c.y > 330){
    //the shape is off the top of 
    //the grid.
    c.y = 270;
  }
   if(c.x > 330){
    //the shape is off the top of 
    //the grid.
    c.x = 270;
  }
}
function placeCube(){
  let thisX = c.x / 30 - 1;
  let thisY = c.y / 30 - 1;
  g[thisX][thisY].color = c.color;
  g[thisX+1][thisY].color = c.color;
  g[thisX+1][thisY+1].color = c.color;
  g[thisX][thisY+1].color = c.color;
  c.x = 600
  
}
