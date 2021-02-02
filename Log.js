class Log extends Base {
    constructor(x, y, height, angle) {

    //calling base class constructor through super keyword
      super(x,y,20,height);

      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      //overriding an existing property
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
    
    }
    
  };
  