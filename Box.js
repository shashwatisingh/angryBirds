class Box extends Base {
  constructor(x, y, width, height) {

    //calling base class constructor through super keyword
    super(x,y,width,height);
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
     //overriding an existing property
    this.image = loadImage("sprites/wood1.png");
    
  
  }
  
};
