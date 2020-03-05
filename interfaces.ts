// INTERFACES! What we've all been waiting for.
// Interfaces create a new custom type, describing the property names and value types of an object.

interface reportable {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name is ${this.name}!`;
  }
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar. Mmm!`;
  }
};

const printReportable = (report: reportable): void => {
  // console.log(`name: ${report.name}`);
  // console.log(`year: ${report.year}`);
  // console.log(`broken: ${report.broken}`);
  console.log(`summary: ${report.summary()}`);
};

printReportable(oldCivic);

interface Cup {
  volume: number;
  height: number;
}

const coffeeCup: Cup = {
  volume: 300,
  height: 20
};

const coffeeCup2 = {
  volume: 300,
  height: 20
};
