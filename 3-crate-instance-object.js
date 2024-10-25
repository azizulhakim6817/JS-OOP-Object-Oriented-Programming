//### Crate instance of object Literal................
const person = new Object();
person.fname = "Azizul ";
person.lname = "Hakim";
person.age = 43;
person.city = "Dhaka";
person.isBangladeshi = true;

person.getName = () => {
  return `My full name : ${person.fname} ${person.lname}`;
};

//console.log(person);
//console.log(person.city);
//console.log(person.isBangladeshi);
console.log(person.getName());
