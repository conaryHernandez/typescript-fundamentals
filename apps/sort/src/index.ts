import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('ahfdikrfkaz');

const numbersSorter = new Sorter(numbersCollection);
const charsSorter = new Sorter(charactersCollection);

numbersSorter.sort();
charsSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
