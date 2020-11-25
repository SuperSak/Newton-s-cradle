class Rope{
    constructor(bodyA, bodyB, s, l){
        var options = {
           length:l,
           stiffness:s, 
           bodyA:bodyA,
           bodyB:bodyB
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope);
    }
    display(){
        var pA=this.rope.bodyA.position
        var pB=this.rope.bodyB.position
        push()
        strokeWeight(4)
        line(pA.x,pA.y,pB.x,pB.y)
        pop()
        
    }
}