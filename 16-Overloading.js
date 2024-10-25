//15-Overriding =>
// parameters count not same => methods => (p1, p2) (p1,p2, p3)..
// parameters Data => No same Data..

class MyClass {
  myMethod(p1, p2, p3) {
    if (arguments.length == 1) {
      console.log("Recived one argument", p1);
    } else if (arguments.length == 2) {
      console.log("Recived two argument", p2, p2);
    } else if (arguments.length == 3) {
      console.log("Recived Three argument", p2, p2, p3);
    } else {
      return "false";
    }
  }
}

let Obj = new MyClass();
Obj.myMethod(1);
Obj.myMethod(1, 2);
Obj.myMethod(1, 2, 3);
