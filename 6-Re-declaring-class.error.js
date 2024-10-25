//6-Re-declaring-class.....................
// 1. 2-Class => SyntaxError: Identifier 'Person' has already been declared
class Person {
  fname = "Azizul";
  num1 = 20;
  num2 = 40;

  addToNumber() {
    return this.num1 + this.num2;
  }
}

class Person {
  fname = "Azizul";
  num1 = 10;
  num2 = 60;

  addToNumber() {
    return this.num1 + this.num2;
  }
}

let PersonObj = new Person();
console.log(PersonObj);
