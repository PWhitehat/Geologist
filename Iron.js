class Iron {

    constructor(x,y,s1, s2) {

        var options = {isStatic: false, restitution: 0.8, friction: 3, density: 30}
		this.iron = Bodies.rectangle(x,y,s1,s2, options)
		this.s1=s1
		this.s2 = s2;
		World.add(world, this.iron);

    }

    display()
	{
			var ironpos = this.iron.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			rect(0,0, this.s1, this.s2);

			pop()
	}

}