let platArray=  [];
let score=0;
let bob;
let jim;
let counter;
var bg;
var heroimg;

function setup(){
	bg = loadImage ("https://cdn.glitch.com/e7ed6e48-956d-448f-9a5a-c3ea284c1a66%2Fforest%20thing.gif?1511288892529");
	createCanvas(1000,600);
	let x = 100;
	let y = 100;
	let width = 200;
	counter = 30;
	bob = new Platform(x,y,width);
	jim = new Hero();
	heroimg= loadImage("https://cdn.glitch.com/e7ed6e48-956d-448f-9a5a-c3ea284c1a66%2Fboop.png?1511288158316");
	
	

}



function draw(){
	background(bg);
	text(counter,10,10);
	jim.show();
	jim.move();
	bob.show();
	checkY();
	checkX();
	

}


function checkY(){
	
	if (jim.y > height){
		
		counter--;
		jim.y = 0;
	}
}

function checkX(){
	if (jim.x > width){
		jim.x = 0;
	}
}



class Hero{
	constructor(){
	this.x = 50;
	this.y = 50;
	this.Vx = 0;
	this.Vy = 0;
	this.width = 10;
	this.height = 20;
	
	}
	
	show()
	{
		image(heroimg, this.x-20, this.y-40);
		// ellipse(this.x, this.y, this.width, this.height);
	}
	
	move()
	{
		if(bob.contains(this.x,this.y) == false)
			this.y++;
		if(keyIsDown(LEFT_ARROW))
			this.x -= 5;
		if (keyIsDown(RIGHT_ARROW))
			this.x += 5;
		if (keyIsDown(UP_ARROW))
			this.y -= 5;
		// if (keyIsDown(DOWN_ARROW))
			// this.y += 5;
	}
	
	
	
}

class Platform{
	constructor(x,y,width){
		this.x = x;
		this.y = y;
		this.width= width;
		this.height= 20;
		
	}
	
	show()
	{
		rect(this.x, this.y, this.width, this.height);
	}
	
	contains(givenX,givenY){
		if(givenX > this.x && givenX < this.x+this.width)
		{
			if(givenY>this.y && givenY< this.y + this.height){
			return true
			}
		}
		return false
	}
}
