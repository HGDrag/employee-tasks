import  express  from 'express';
import { getEmployees, createEmployee, getEmployeeById, deleteEmployee, updateEmployee, topFive } from '../controllers/EmployeeController.js'

const router = express.Router();

router.route('/sorted')
    .get(topFive);

router.route('/')
    .get(getEmployees)
    .post(createEmployee);
    
    router.route('/:id')
    .get(getEmployeeById)
    .delete(deleteEmployee)
    .patch(updateEmployee);

    
export default router;