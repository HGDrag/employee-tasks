import  express  from 'express';
// import { getProducts, createProduct, getProductById, deleteProduct, updateProduct } from '../Controllers/ProductsController.js'

const router = express.Router();

router.route('/')
    .get()
    .post()

router.route('/:id')
    .get()
    .delete()
    .patch()

export default router;