// import { readStorage, appendToStorage, getProduct, delProduct, patchProduct} from '../models/ProductsModel.js';

// Return all products
export const getProducts = (req , res) => readStorage(PATH, data => res.send(JSON.stringify(data)));
   
// Create product
export const createProduct = (req, res) => appendToStorage(PATH, req.body, data => res.send(data));

 // Get product by id
export const getProductById = (req, res) => {
    const { id } = req.params;

    getProduct(PATH, id, data => res.send(data));
};

// Delete products by id
export const deleteProduct = (req, res) => {
    const { id } = req.params;

    delProduct(PATH, id , data => res.json(data));
}

// Upodate product by id (using patch method)
export const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, type, price} = req.body;

    patchProduct(PATH, id, [name, type, price],  data => res.json(data));
}