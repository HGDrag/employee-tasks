import  express  from 'express';
import { getEmployees, createEmployee, getEmployeeById, deleteEmployee, updateEmployee } from '../controllers/EmployeeController.js'

const router = express.Router();

router.route('/')
    .get(getEmployees)
    .post(createEmployee);

router.route('/:id')
    .get(getEmployeeById)
    .delete(deleteEmployee)
    .patch(updateEmployee);

export default router;