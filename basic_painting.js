var WIDTH = 1800;
var HEIGHT = 550;
var BRUSH_SIZE = 30;

var brushSize = BRUSH_SIZE;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	background(0);
	fill(200);
	rect(10, 10, WIDTH - 20, HEIGHT - 20);
	fill(0);
}

function draw() {
	if(mouseIsPressed){
		ellipse(mouseX, mouseY, brushSize, brushSize);
	}
	noStroke();
}

function keyPressed(){
	if(key === ' '){
		clear();
		background(0);
		fill(200);
		rect(10, 10, WIDTH - 20, HEIGHT - 20);
		fill(0);
		brushSize = BRUSH_SIZE;
	}else if(key === '0'){
		fill(0);
	}else if(key === '1'){
		fill('red')
	}else if(key === '2'){
		fill('blue');
	}else if(key === '3'){
		fill('green');
	}else if(key === '4'){
		fill('yellow')
	}else if(key === '9'){
		fill(200);
	}
	if(keyCode === RIGHT_ARROW){
		brushSize *= 1.5;
	}else if(keyCode === LEFT_ARROW){
		brushSize /= 1.5;
	}
}