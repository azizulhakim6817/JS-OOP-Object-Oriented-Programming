class Father {
  static greetParent() {
    return "Hello I am the Father";
  }
}

class Son extends Father {
  static greetChild() {
    return "Hello I am the Child";
  }
}

//console.log(Father.greetParent());
//console.log(Son.greetChild());
