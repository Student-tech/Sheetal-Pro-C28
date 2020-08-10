class Tree {
    constructor(x, y, width, height){
        var option={
            isStatic: true
        }
        this.tree = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;

        this.image = loadImage("tree.png");

        World.add(world, this.tree);
    }
    display()
    {

        fill("white");
        push();
        translate(this.tree.position.x, this.tree.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }
}