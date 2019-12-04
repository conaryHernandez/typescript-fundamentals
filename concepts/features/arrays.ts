const carMarkers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];
const carsByMake2: string[][] = [];

// help with inference when extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();

// Prevetn incompatibles values carMarkers.push(100);

carMarkers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (string | Date)[] = [new Date(), '2023-10-10'];
importantDates.push('2030-10-10');
importantDates.push('2037-10-10');
