class Chain {

    constructor(body1, body2){

        var options = {

            bodyA : body1,
            bodyB : body2,
            stiffnes : 0.05,
            length : 10
        
        }
        this.joint = Matter.Constraint.create(options);
        World.add(world,this.joint);

        this.bodyX = body1;
        this.bodyY = body2;


    }
    display(){

        strokeWeight(4);
        line(this.bodyX.position.x,this.bodyX.position.y,this.bodyY.position.x,this.bodyY.position.y);
    }
}