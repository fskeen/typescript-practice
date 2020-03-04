const profile = {
  name: "alex", // a string for name
  age: 20, // a number for age
  coords: {
    // an object of numbers for location
    lat: 0,
    long: 15
  },
  setAge(age: number): void {
    // a method to set the age
    this.age = age;
  }
};

const { age }: { age: number } = profile;
// if you want to annotate a type for a destructured object, you need to annotate that property of the object, like above

// const {coords: {lat, long}} = profile
// the non-TS destructured syntax

const {
  coords: { lat, long }
}: { coords: { lat: number; long: number } } = profile;
// the type annotations for nested values in a dsetructured object
