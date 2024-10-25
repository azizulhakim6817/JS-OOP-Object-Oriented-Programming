//4. Constructor inside only Child Class parameters....

class Father {
  constructor() {}
}

class Son extends Father {
  constructor(mag) {
    super();
    console.log(mag);
  }
}

new Father(); // Error (is not Ownership)
new Son("4. Constructor insite only Child Class parameters");