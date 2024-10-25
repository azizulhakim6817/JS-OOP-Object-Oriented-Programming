// 10-Get------Set...........................
// ProductObj.SetPrice = 300;
class Product {
  set setPrice(value) {
    this.price = value;
  }

  get GetPice() {
    return this.price;
  }
}

let ProductObj = new Product();
ProductObj.setPrice = 300;
console.log(ProductObj);

//Answer : Product { price: 300 }
