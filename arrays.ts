const carMakers = ["Ford", "Toyota", "Chevy"];
const dates = [new Date(), new Date()];
const twoD = [["rio"], ["camaro"], ["f150"]];
// annotate this with twoD: string[][]

// help with inference when extrqcting values
const oneCar = carMakers[0];
const myCar = carMakers.shift();

// prevent incompatible values
// carMakers.push(100)

// help with map, foreach, reduce. when correctly typed, it will enforce data type coming in and will give better autocomplete options
carMakers.map((car: string): string => {
  return car;
});

//  you can still use different types in an array if needed
const importantDates: (string | Date)[] = [new Date(), "2020"];

// when arrays? Whenever you need to represent a collection of records with some arbitrary sort order
