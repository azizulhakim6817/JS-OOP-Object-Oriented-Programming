// 3. Constuctor insite only Child Class................
class Father {
  constructor() {}
}

class Son extends Father {
  constructor() {
    super();
    console.log("3. Constructor insite only Child Class");
  }
}

new Father(); // Error (is not Ownership)
new Son();