import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'new record', age: 0 });

// user.set({ name: 'pedrito', age: 99 });

user.save();
