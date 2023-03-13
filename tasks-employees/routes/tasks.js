import  express  from 'express';
import { getTasks, createTask, getTaskById, deleteTask, updateTask } from '../controllers/TaskController.js'

const router = express.Router();

router.route('/')
    .get(getTasks)
    .post(createTask);

router.route('/:id')
    .get(getTaskById)
    .delete(deleteTask)
    .patch(updateTask);

export default router;