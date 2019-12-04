interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  }
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printReportable = (item: Reportable): void => {
  console.log(item.summary());
};

printReportable(oldCivic);
printReportable(drink2);
