// Class....function new.......................
class Person {
  fname = "Aziul";
  lname = "Hakim";
  age = 40;
  city = "Dhaka";
  isBangladeshi = true;

  getName() {
    return `My full name : ${this.fname} ${this.lname} age: ${this.age}`;
  }
}

let PersonObj = new Person();

//console.log(PersonObj);
//console.log(PersonObj.city);
console.log(PersonObj.getName());
