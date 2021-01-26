class Ball{
    constructor(x,y,radius){
         var options  = {
          isStatic : false,
         //restitution : 0.3,
          friction : 0.3,
          density : 1.0

      }
      this.body = Bodies.circle(x,y,radius,options)
      this.radius = radius;
      this.image = loadImage("paper.png");
      
      World.add(world , this.body);
    }
    display(){
        var pos = this.body.position;
        //push();
        //translate(pos.x,pos.y)
        ellipseMode(RADIUS);
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,60);
        //ellipse(pos.x,pos.y,this.radius);
        

        

        //pop();
    }
}