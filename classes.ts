// Classes!

class Vehicle {
  //   color: string;
  // initialize if you are just defining the property

  constructor(public color: string) {
    // this.color = color;
    // initialize if you're taking in values to help create object
    // can also be written by removing the "public" modifier and uncommenting lines 4 and 8
  }

  protected honk(): void {
    console.log("Beep beep!");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    // when overriding method inherited from the parent class, you can't change the modifier that method has
    console.log("WHEEEE");
  }
  startDriving(): void {
    console.log("Engine turning on...");
    this.drive();
    this.honk();
    console.log(this.color);
  }
}

const toyota = new Vehicle("purple");

const kia = new Car(7, "blue");
kia.startDriving();

// MODIFIERS -- the point is to restrict access to diff methods
// public = this method can be called anywhere at any time. DEFAULT BEHAVIOR FOR METHODS!
// private = this method can only be called by other methods in this class
// protected = this method can be called by other methods in this class or by other methods in child classes
