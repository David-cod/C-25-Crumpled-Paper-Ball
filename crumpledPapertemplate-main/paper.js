class Paper{

    constructor(x,y,radius){
        var options={
            restitution:1,
            friction: 0.3,
            density: 3.0,
            isStatic:false
        }

            this.x=x;
            this.y=y;
            this.radius=radius;
            this.image=loadImage("paper.png")
            this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, options);
            World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
       // var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
      //  rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(this.image,0, 0, this.radius, this.radius);
        pop();
      }
    


}