//#### 11. Static keywords........................
class Person {
  static fname = "Azizul";
  lname = "Hakim";

  static getName() {
    return `My name is : ${this.fname} ${this.lname}`;
  }
}

/* let PersonObj = new Person();
console.log(PersonObj.getName()); */

console.log(Person.fname); // Answer :Azizul
console.log(Person.lname); // Answer : undefined....
console.log(Person.getName()); // Answer : My name is : Azizul undefined
