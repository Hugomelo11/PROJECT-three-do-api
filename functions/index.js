import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getTasks, createTask, updateTask, deleteTask } from './src/tasks.js';
import { createUser } from './src/users.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/tasks', getTasks);
app.post('/tasks', createTask);
app.patch('/tasks/:taskId', updateTask);
app.delete('/tasks/:taskId', deleteTask);

app.post('/users', createUser);


export const api = functions.https.onRequest(app);
