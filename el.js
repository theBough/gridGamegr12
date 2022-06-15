let el;
let el2;

function createEl() {
  el = new Clickable(1000, 360);
  el2 = new Clickable(1000, 390);
  el.resize(30, 60);
  el2.resize(60, 30);
  el2.strokeWeight = 0;
  el.strokeWeight = 0;
  el.color = "pink";
  el2.color = "pink";
  el.text = "";
  el2.text = "";
  el.cornerRadius = 0
  el2.cornerRadius = 0
  el.onPress = function () {
    el.isPressed = true;
    el2.isPressed = true;
  };
  el.onRelease = function () {
    el.isPressed = false;
    el2.isPressed = false;
    checkEl();
    el.x = Math.floor(el.x / 30) * 30;
    el.y = Math.floor(el.y / 30) * 30;
    el2.x =el.x
    el2.y = el.y + 30
     let thisRow = el.y / 30 - 1
    placeEl();
    if(isRowComplete(thisRow)){
      changeRowColor(thisRow)
    }
    if(isRowComplete(thisRow+1)){
      changeRowColor(thisRow+1)
    }
    checkForThree();
  };
} //end createCube
function checkEl(){
  if(el.x < 30){
    //the shape off the grid to the left.
    el.x = 30;
  }
  if(el.y < 30){
    //the shape is off the top of 
    //the grid.
    el.y = 30;
  }
  if(el.y > 330){
    //the shape is off the top of 
    //the grid.
    el.y = 270;
  }
   if(el.x > 330){
    //the shape is off the top of 
    //the grid.
    el.x = 270;
  }
}
function placeEl() {
  let thisX = el.x / 30 - 1;
  let thisY = el.y / 30 - 1;
  g[thisX][thisY].color = el.color;
  g[thisX+1][thisY+1].color = el.color;
  g[thisX][thisY+1].color = el.color;
  el.x = 600;
  el2.x = 600
}
