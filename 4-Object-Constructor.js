// 4-Object-Constructor...this...
function person() {
  this.fname = "Azizul";
  this.lname = "hakim";
  this.age = 23;
  this.isBangladeshi = true;

  this.getName = () => {
    return `My Name : ${this.fname} ${this.lname}`;
  };
}
let personInstance = new person();
//console.log(personInstance);
console.log(personInstance.fname);
