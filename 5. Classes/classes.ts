// basic class

class Vehicle {
  // color is a property
  constructor(public color: string) {

  }

  honk(): void {
    console.log('Honk Honk');
  }
}

const veh = new Vehicle('green');
console.log(veh.color);

// Inheritance

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("Vroom");
//   }
//
//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }
//
// const car = new Car();
// car.startDrivingProcess();


