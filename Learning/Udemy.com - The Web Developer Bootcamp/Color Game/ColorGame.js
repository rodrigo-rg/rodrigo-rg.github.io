var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var level = 2;
var selectedSquare;


document.querySelectorAll(".mode")[0].addEventListener("click", function() { selectLevel(this) });
document.querySelectorAll(".mode")[1].addEventListener("click", function() { selectLevel(this) });

document.getElementById("newColors").addEventListener("click", function() { newColors() });

init();

function init() {
	refreshLevel();
	newColors();
}

function newColors() {
	document.querySelector("h1").style.background = "steelblue";
	document.querySelector("#newColors").textContent = "New Colors";
	document.querySelector("#message").textContent = "";
	selectedSquare = Math.floor(Math.random() * 3 * level);
	for (var i = 0; i < 6; i++) {
		squares[i].style.display = "none";
	}
	for (var i = 0; i < 3*level; i++) {
		squares[i].style.display = "block";
		squares[i].style.background = randomColor();
		squares[i].addEventListener("click", function(){
			trySquare(this)
		});
		if (i == selectedSquare) {
			colorDisplay.textContent = squares[i].style.background;
		}
	}
}

function refreshLevel() {
 	level = (document.querySelector(".selected").textContent == "Easy" ? 1 : 2);
}

function selectLevel(selection) {

	document.querySelectorAll(".mode")[0].classList.remove("selected")
	document.querySelectorAll(".mode")[1].classList.remove("selected")

	if (selection.textContent == "Easy") {
		document.querySelectorAll(".mode")[0].classList.add("selected")
	}
	else {
		document.querySelectorAll(".mode")[1].classList.add("selected")
	}
	init();
}


function trySquare(square) {
	if (square.style.background == colorDisplay.textContent) {
		for (var i = 0; i < 3*level; i++) {
			squares[i].style.background = colorDisplay.textContent;
		}
		document.querySelector("h1").style.background = colorDisplay.textContent;
		document.querySelector("#message").textContent = "Correct!";
		document.querySelector("#newColors").textContent = "Play again?";
	}
	else {
		square.style.background = "#232323";
		document.querySelector("#message").textContent = "Try Again";
	}
}

function randomColor() {
	return "rgb(" +
		Math.floor(Math.random()*256) + ", " +
		Math.floor(Math.random()*256) + ", " +
		Math.floor(Math.random()*256) + ")";
}