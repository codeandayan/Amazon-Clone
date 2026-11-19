class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  displayInfo() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
  }
}
const toyota = new Car('Toyota', 'Corolla');
const tesla = new Car('Tesla', 'Model S');
console.log(toyota);
toyota.displayInfo();
console.log(tesla);
tesla.displayInfo();
