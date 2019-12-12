class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

// Example of generics with functions

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([1, 2, 3, 4]);

// Generic constraints because we limit waht type of values can we pass

class Car {
  print(): void {
    console.log('Im a car');
  }
}

class House {
  print(): void {
    console.log('Im a House');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// printHouseOrCars([1,2,3,4]);
printHouseOrCars<House>([new House()]);
