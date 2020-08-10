class Mango
{

    constructor(x, y, radius)
    {

        var option=
        {

            isStatic: true,
            restitution: 0,
            friction: 1

        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, option);

        this.image = loadImage("mango.png");
      
        World.add(world, this.body);

    }
    display()
    {

      fill("white");
      var posit = this.body.position;
      push();
      translate(posit.x, posit.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius*10);
      pop();

    }

}