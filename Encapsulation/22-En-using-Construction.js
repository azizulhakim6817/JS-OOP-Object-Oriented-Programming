// 22-En-using-Construction => function() {} =>

function CreateCounter() {
  let count = 0;

  this.increment = () => {
    count++;
  };
  this.decrement = () => {
    count--;
  };
  this.getCount = () => {
    return count;
  };
}

let counter = new CreateCounter();

counter.increment(); //1
counter.increment(); //2
counter.increment(); //3
counter.increment(); //4
counter.increment(); //5
counter.decrement(); //-4
counter.decrement(); //-3
counter.decrement(); //-2

console.log(counter.getCount()); /// Answer : 2

//console.log(counter);
/* Answer: 
CreateCounter {
  increment: [Function (anonymous)],
  decrement: [Function (anonymous)],
  getCount: [Function (anonymous)]
}
*/