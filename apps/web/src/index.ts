import { UserForm } from './views/UserForm';

const userForm = new UserForm(document.getElementById('root'));

userForm.render();

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
