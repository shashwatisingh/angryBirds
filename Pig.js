class Pig extends Base {
    constructor(x, y) {
      //calling base class constructor through super keyword
      super(x,y,50,50);
      //overriding an existing property
      this.image = loadImage("sprites/enemy.png");
      
    }
   
  }
  