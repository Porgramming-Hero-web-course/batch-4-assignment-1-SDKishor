{
  // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
  
  class Car {
    constructor(public make: string, public model: string, public year: number) {}
    getCarAge(): number {
      return new Date().getFullYear() - this.year;
    }
  }

  const myCar = new Car("Tesla", "Model S", 2012);
  console.log(myCar.getCarAge());
}