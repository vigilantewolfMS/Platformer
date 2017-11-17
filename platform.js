let platArray=  [];
let score=0;
let bob;
let jim;
let counter;
var bg;

function setup(){
	bg = loadImage ("https://vignette.wikia.nocookie.net/dgrayman/images/b/b6/Kanda_pic_Hallow.png/revision/latest?cb=20160909202354");
	createCanvas(1000,600);
	let x = 100;
	let y = 100;
	let width = 200;
	counter = 30;
	bob = new Platform(x,y,width);
	jim = new Hero();
	
	

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
	this.x = 0;
	this.y = 0;
	this.Vx = 0;
	this.Vy = 0;
	this.width = 10;
	this.height = 20;
	
	}
	
	show()
	{
		ellipse(this.x, this.y, this.width, this.height);
	}
	
	move()
	{
		if(bob.contains(this.x,this.y))
			this.y++;
		if(keyIsDown(LEFT_ARROW))
			this.x -= 5;
		if (keyIsDown(RIGHT_ARROW))
			this.x += 5;
		if (keyIsDown(UP_ARROW))
			this.y -= 5;
		if (keyIsDown(DOWN_ARROW))
			this.y += 5;
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
