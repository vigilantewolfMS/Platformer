let platArray=  [];
let score=0;
let jim;
let counter;
var bg;
var heroimg;
let gravity = 0.2;
let numberplat = 15;
let pwidth = 0;
let evildood;
let enemyx;
let enemyy;


function preload(){
	bg = loadImage ("https://cdn.glitch.com/e7ed6e48-956d-448f-9a5a-c3ea284c1a66%2Fforest%20thing.gif?1511288892529");
	heroimg= loadImage("https://cdn.glitch.com/e7ed6e48-956d-448f-9a5a-c3ea284c1a66%2Fboop%20boop.png?1511807582190");
	}

function setup(){
	
	createCanvas(windowWidth-50,windowHeight-10);
	let x = random(windowWidth);
	let y = random(height);
	let width = random(40,600);
	counter = 1;
	jim = new Hero();
	BuildPlatforms();
	endgame();
	evildood = new enemy(x,y);
	

	
	

}

function BuildPlatforms(){
	
	numberplat = random(5,10);
	platArray= [];

	for(var i = 0;i < numberplat; i++)
	{
		let x = random(0,windowWidth/3);
		let y = random(50,height-80);
		pwidth = random(40,400);
		platArray.push(new Platform(x,y,pwidth));
	}
	
		for(var i = 0;i < numberplat; i++)
	{
		let x = random(width/3 ,width*.66);
		let y = random(50,height-80);
		pwidth = random(40,500);
		platArray.push(new Platform(x,y,pwidth));
	}
		for(var i = 0;i < numberplat; i++)
	{
		let x = random(width*.66 ,width-10);
		let y = random(50,height-80);
		pwidth = random(40,600);
		platArray.push(new Platform(x,y,pwidth));
	}
}


function draw(){
	background(bg);
	text(counter,10,10);
	jim.show();
	jim.move();
	jim.touchingPlat();
	checkY();
	checkX();
	
	for(var i = 0; i < platArray.length; i++){
		platArray[i].show();
		
		if (i< 3){
			evildood.x = platArray[i].x;
			evildood.y = platArray[i].y;
			evildood.show();
			evildood.move();
		}
	}

}


function endgame(){
	if (counter = 0){
		Noloop();
	}
}

function checkY(){
	
	if (jim.y > height){
		
		counter--;
		jim.y = 0;
		jim.Vy = 0;
		BuildPlatforms();
	}
}

function checkX(){
	if (jim.x > width){
		jim.x = 0;
		BuildPlatforms();
		counter++;
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
	
	touchingPlat(){
		for (var i= 0; i< platArray.length; i++){
			if(platArray[i].contains(this.x,this.y+10)){
				//you are touching a platform
				this.Vy = 0;
				this.y = platArray[i].y - 10;
				if (keyIsDown(UP_ARROW)){
					this.Vy = -8;
				}
				
				return true;
			}
			
		}
	}
	move()
	{
		//this.y++;
		this.Vy += gravity;
		this.y += this.Vy;
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

class enemy{
	constructor(){
	this.x = 5;
	this.y = 6;
	this.width = 10;
	this.height = 20;
	}
	
	show()
	{
		ellipse(this.x, this.y, this.width, this.height);
		
	}
	
	move(){
		for (var i= 0; i< platArray.length; i++){
			if(platArray[i].contains(this.x,this.y+10)){
				this.x += 3
			}
		}
	}
}
