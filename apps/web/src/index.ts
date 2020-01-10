import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'test', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();
} else {
  throw new Error('Root element nor found');
}

/* import { User } from './models/User';

const collection = new Collection<
  User,
  UserProps
>('http://localhost:3000/users', (json: UserProps) => User.buildUser(json));


const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
*/
