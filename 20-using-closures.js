// 20-Encapsulation Using Closuser.
function createCounter() {
  let = count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); //1
counter.increment(); //2
counter.increment(); //3
counter.increment(); //4
counter.decrement(); //-3
counter.decrement(); //-2
console.log(counter.getCount()); // Answer: Result :  2
