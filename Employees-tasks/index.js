import express from 'express';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employees.js'


const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.use('/employers', employeeRoutes);

// app.use('/tasks', );

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
});