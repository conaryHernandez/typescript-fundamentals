import { User } from './models/User';

const user = new User({ name: 'Conary', age: 24 });

console.log(user.get('name'));
