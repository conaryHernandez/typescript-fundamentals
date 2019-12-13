import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'Conary', age: 24 });

user.on('change', () => {
  console.log('Change #1');
});

axios.get('http://localhost:3000/users/1');
