let platArray=  [];
let score=0;
let bob;
let jim;
var bg;

function setup(){
	bg = loadImage ("https://vignette.wikia.nocookie.net/dgrayman/images/b/b6/Kanda_pic_Hallow.png/revision/latest?cb=20160909202354");
	createCanvas(1000,600);
	let x = 100;
	let y = 100;
	let width = 200;
	bob = new Platform(x,y,width);
	jim = new Hero();
	
	

}



function draw(){
	background(bg);
	jim.show();
	bob.show();
	

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
}
