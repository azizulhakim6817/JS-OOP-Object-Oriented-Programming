//15-Overriding == Change ...
// Father to Son is same of property changes....
// Father is not change property 
class Father {
  addNumber() {
    let num1 = 10;
    let num2 = 20;
    console.log(num1 + num2);
  }
}

class Son extends Father {
  addNumber() {
    let num1 = 100;
    let num2 = 200;
    console.log(num1 + num2);
  }
}

let sonObj = new Son();
sonObj.addNumber();
