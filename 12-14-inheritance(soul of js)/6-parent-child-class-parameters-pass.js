// 6. Constructor inside only Child & Parent Class parameters.
class Father {
  constructor(mag_Father) {
    console.log(mag_Father);
  }
}

class Son extends Father {
  constructor(mag_Son) {
    super();
    console.log(mag_Son);
  }
}

new Father("6. Constructor insite only Parent Class parameters."); // Ans : 1. parent
new Son("6. Constructor insite only Child Class parameters."); //Ans: 1. parent // 2. child ...

//Answer : Terminal comand : node 13-inheritance-constructor.js....
/*
6. Constructor insite only Parent Class parameters.
undefined
6. Constructor insite only Child Class parameters.
*/
