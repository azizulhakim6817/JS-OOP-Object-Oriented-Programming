// 2. Constructor inside only parent calss parameter.
class Father {
  constructor(mag) {
    console.log(mag);
  }
}

class Son extends Father {}

//new Father("Constructor inside only parent calss parameter.");
new Son("Constructor inside only parent calss parameter.");
