class Father {
    constructor() {
      console.log(" 1. Constuctor insite only Parent Class.");
    }
  }
  
  class Son extends Father {
  
  }
  
  new Father();
  new Son();