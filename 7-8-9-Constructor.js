//###### 7-Constructor >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//contructor Name should be constructor........
//Constructor execute automatically when Object is created...
// Constructor can take parameter............
//Not return .............

/* 
class Person {
  constructor() {
    console.log("I am a constructor methods");
  }
}

let PersonObj = new Person();
 */

//##### 8-consttructor parameter passing <<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* class Person {
  constructor(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
  }
}

let PersonObj = new Person(40, 50); */

//Answer : 90 .....

//#####9-Cnange Class property by Constructor parameters <<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
class Person {
  num1 = 20;
  num2 = 10;

  constructor(a, b) {
    this.num1 = a;
    this.num2 = b;
  }

  addTwoNumber() {
    return this.num1 + this.num2;
  }
}

let PersonObj = new Person(100, 400);
console.log(PersonObj.addTwoNumber());
