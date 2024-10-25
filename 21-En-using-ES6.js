// 21-Encapsulation-using-ES6 => #count => this.#count => 
class createCounter {
  #count = 0;

  increment() {
    this.#count++;
  }

  decrement() {
    this.#count--;
  }

  getCount() {
    return this.#count;
  }
}

let counter = new createCounter();

counter.increment(); //1
counter.increment(); //2
counter.increment(); //3
counter.increment(); //4
counter.increment(); //5
counter.decrement(); //-4
counter.decrement(); //-3
counter.decrement(); //-2

console.log(counter.getCount()); /// Answer : 2
