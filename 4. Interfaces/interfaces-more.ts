interface Reportable {
  summary(): string;
}

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const oldCivics = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(drinks);

