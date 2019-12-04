import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Todo {
  id: number;
  title: string;
  body: string;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  console.log(todo);

  const ID = todo.id;
  const title = todo.title;
  const body = todo.body;

  logTodo(ID, title, body);
});

const logTodo = (id: number, title: string, body: string) => {
  console.log(`
  The post with Id: ${id}
  The post with title: ${title}
  The post with flag: ${body}
`);
};
