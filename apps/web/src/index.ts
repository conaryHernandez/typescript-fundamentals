import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'new record', age: 0 });

user.on('change', () => {
  console.log('change!!!');
});

console.log(user.get('name'));
