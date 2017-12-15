/*
The "square" in the case is a variable which has been assigned with various div's from the HTML. And square is like an array of objects . (Colt has used squares  as the variable so i would be using that in my answer for more clarity).

For example:- If you pass the statement  console.log(squares);  in your console you will get the following result:-

(6) [div.square, div.square, div.square, div.square, div.square, div.square] , which clearly shows that there are 6 div under it as they all share the same"square" class, squares behaves like an array. and in order to access various elements of an array we need to use indexing.
*/
var numSquares = 9
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

h1.style.backgroundColor = "steelblue"

colorDisplay.textContent = pickedColor;
easyBtn.addEventListener("click",function(){
  h1.style.backgroundColor = "steelblue"
  resetButton.textContent = "New Colors";
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");  
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
})

hardBtn.addEventListener("click",function(){
  h1.style.backgroundColor = "steelblue"
  resetButton.textContent = "New Colors";
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 9;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
    if(colors[i]){
      squares[i].style.background = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
})



resetButton.addEventListener("click",function(){
  resetButton.textContent = "New Colors";
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from Array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor
  //change colors from squares on page.
  for(var i = 0; i < squares.length; i ++){
  squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
})

for(var i = 0; i < squares.length; i ++){
//add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
//add click listeners to squares
  squares[i].addEventListener("click",function(){
   //Grab color of clicked square
  var clickedColor = this.style.backgroundColor;
    
   // compare color to picked color
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      messageDisplay.text.color = white;
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}


function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
  //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
  
function generateRandomColors(num){
  //make an array
  var arr = []
  //add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color, push into array
    arr.push(randomColor());
    }
  //return array
  return arr;
}


function randomColor(){
  //pick a red from  0 - 255
  var r = Math.floor(Math.random() * 256)
  //pick a green from 0 - 24455
  var g = Math.floor(Math.random() * 256)
  //pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256)
  //return the string
  return "rgb(" + r + ", " + g + ", " + b + ")"
  
}


