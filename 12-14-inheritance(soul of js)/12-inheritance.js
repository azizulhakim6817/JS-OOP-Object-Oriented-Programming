//### 12-inheritance(soul of js).....extends....
//1. inheritance ⇒class Father{ } ⇒ class Son extends Father{ }
class Father {
  num1 = 30;
  num2 = 10;
  addNumber() {
    let sum = this.num1 + this.num2;
    console.log(sum);
  }
}

class Son extends Father {}

//Son access................................
/* 
let SonObj = new Son();

console.log(SonObj);
console.log(SonObj.num1);
console.log(SonObj.num2);
*/
// Answer :  Son { num1: 30, num2: 10 }

//Father access ........................................
let FatherObj = new Father();
console.log(FatherObj); // Father { num1: 30, num2: 10 }
console.log(FatherObj.num1);
console.log(FatherObj.num2);
