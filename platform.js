let platArray=  [];
let score=0;
let jim;
let counter;
var bg;
var heroimg;
let gravity = 0.01;


function preload(){
	bg = loadImage ("https://cdn.glitch.com/e7ed6e48-956d-448f-9a5a-c3ea284c1a66%2Fforest%20thing.gif?1511288892529");
	heroimg= loadImage("https://cdn.glitch.com/e7ed6e48-956d-448f-9a5a-c3ea284c1a66%2Fboop%20boop.png?1511807582190");
	}

function setup(){
	
	createCanvas(windowWidth,windowHeight);
	let x = random(windowWidth);
	let y = random(height);
	let width = random(40,600);
	counter = 30;
	jim = new Hero();
	
	for(var i = 0;i < 9; i++)
	{
		let x = random(windowWidth);
		let y = random(height);
		let width = random(40,600);
		platArray[i] = new Platform(x,y,width);
	}
	

}



function draw(){
	background(bg);
	text(counter,10,10);
	jim.show();
	jim.move();
	checkY();
	checkX();
	
	for(var i = 0; i < 9; i++){
		platArray[i].show();
	}

}


function checkY(){
	
	if (jim.y > height){
		
		counter--;
		jim.y = 0;
		jim.Vy = 0;
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
		image(heroimg, this.x-20, this.y-28);
		// ellipse(this.x, this.y, this.width, this.height);
	}
	
	move()
	{
		for(var i = 0; i < 9; i++){
			
			if(platArray[i].contains(this.x,this.y+10) == false){
				//this.y++;
				this.Vy += gravity;
				this.y += this.Vy;
			}
			
			else{
				//you are touching a platform
				this.Vy = 0;
				this.y = platArray[i].y - 10;
				if (keyIsDown(UP_ARROW)){
					this.Vy = -2;
				}
			}
		}
		if(keyIsDown(LEFT_ARROW))
			this.x -= 5;
		if (keyIsDown(RIGHT_ARROW))
			this.x += 5;

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
