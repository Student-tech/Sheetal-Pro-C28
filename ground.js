class Ground{
    constructor(x, y, width, height){
        var option= {
            isStatic: true
        }
        this.ground = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;

        World.add(world, this.ground);
    }
    display()
    {

        fill(100);
        push();
        translate(this.ground.position.x, this.ground.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

    }
}