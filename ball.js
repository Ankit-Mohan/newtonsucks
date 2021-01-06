class ball
{
    constructor (x,y,radius)
    {
        var options = 
        {
          restitution : 0.8
        }

    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius = radius;
    }
display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate (pos.x,pos.y);
    rotate (angle);
    fill(255);
    circle(0,0,this.width,this.height);
    pop();
}

}