let person = {
  first_name: "Azizul",
  last_name: "Hakim",
  age: 26,
  city: "Dhaka",

  getName: () => {
    return `My mang: ${person.first_name} ${person.last_name} age:   ${person.age}`;
  },
};

//console.log(person);
//console.log(person.first_name);
console.log(person.getName());
