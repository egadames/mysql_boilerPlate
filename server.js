const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);
// app.get('/api/todos', async (req, res) => {
// });

// app.get('/api/todos/:id', async (req, res) => {
// });

// app.post('/api/todos', async (req, res) => {
// });

// app.delete('/api/todos/:id', async (req, res) => {
// });

// app.patch('/api/todos/:id', async (req, res) => {

// });

// app.put('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const { text } = req.body;
//   const getTodoById = 'SELECT * FROM todos WHERE ?;';
//   try {
//     const [todos] = await connection.query(getTodoById, { id });
//     const foundTodo = todos[0];
//     const updateTodoById = 'UPDATE todos SET ?, ? WHERE ?;';
//     await connection.query(updateTodoById, [{ text }, { completed: !foundTodo.completed}, { id }]);
//     const [todosUpdated] = await connection.query(getTodoById, { id });
//     res.json(todosUpdated[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

app.listen(PORT);
