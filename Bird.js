class Bird extends Base{
    constructor(x, y) {

      //calling base class constructor through super keyword
      super(x,y,50,50);
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      
      //overriding an existing property
      this.image = loadImage("sprites/bird.png");
      
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      super.display();
    };
  };
  