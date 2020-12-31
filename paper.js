class Paper{
    constructor(x,y,radius){
    var options = {

    'restitution': 0,
    'friction': 0,
    'density': 1.2
    
    }    
    this.body = Matter.Bodies.circle(x,y,radius,options,30);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage("Images/paper.png");
    World.add(world,this.body);
    
    
    }    
    display(){      
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("white");
        strokeWeight(1.5);
        stroke("yellow")
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}