class Slingshot{
    constructor(bodyA, ptB){
        var options = {
            bodyA: bodyA,
            pointB: ptB,
            stiffness: 0.04,
            length: 10
        }
        this.ptB = ptB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
fly(){
    this.slingshot.bodyA = null;
}
    display(){
        if(this.slingshot.bodyA){

        var pointA = this.slingshot.bodyA.position;
        var pointB = this.ptB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}