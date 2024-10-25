// 5. Constructor insite only Child & Parent Class.
class Father {
    constructor() {
      console.log("5. Constructor insite only  Parent Class.");
    }
  }
  
  class Son extends Father {
    constructor() {
      super();
      console.log("5. Constructor insite only Child Class.");
    }
  }
  
  new Father(); // Ans : 1. parent 
  //new Son();  //Ans: 1. parent // 2. child ....