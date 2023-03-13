import express from 'express';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employees.js'
import taskRoutes from './routes/tasks.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//endpoints
app.use('/employees', employeeRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));
