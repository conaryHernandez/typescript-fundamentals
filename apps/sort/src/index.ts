import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('ahfdikrfkaz');
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-500);
linkedList.add(-36);
linkedList.add(15);
linkedList.add(0);

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
