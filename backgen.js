var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var htm = document.getElementById("htm");
var rand = document.getElementById("random");

htm.onload = changeGradient();

rand.onclick = getRandomColor;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var col1 = '#';
  var col2 = '#';
  for (var i = 0; i < 6; i++) {
    col1 += letters[Math.floor(Math.random() * 16)];
    col2 += letters[Math.floor(Math.random() * 16)];
  }
  console.log(col1);
  console.log(col2);
  color1.value = col1;
  console.log(color1.value);
  color2.value = col2;
  console.log(color2.value);
  changeGradient();
}


function changeGradient(){
  console.log(color1.value);
  console.log(color2.value);
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
  console.log(body.style.background);
	css.textContent = body.style.background+ " ;";
}

color1.addEventListener("input", changeGradient);
	

color2.addEventListener("input", changeGradient);
	