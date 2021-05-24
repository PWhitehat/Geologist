class Stone {

    constructor(x,y,s1, s2) {

        var options = {isStatic: false, restitution: 0.8, friction: 0.9, density: 12}
		this.stone = Bodies.rectangle(x,y,s1,s2, options)
		this.s1=s1
		this.s2 = s2;
		World.add(world, this.stone);

    }

    display()
	{
			var stonepos=this.stone.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0, this.s1, this.s2);

			pop()
	}

}