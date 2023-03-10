import { LocalStorage }from "node-localstorage";
let localStorage = new LocalStorage('./scratch');


// Return all products
export const getEmployees = (req , res) => {
    res.send('hi')
};
   
// Create product
export const createEmployee = (req, res) => {
   
   localStorage.setItem('name', 'john');
   res.send(localStorage.getItem('name'))
}
 // Get product by id
export const getEmployeeById = (req, res) => {
    const { id } = req.params;  

};

// Delete products by id
export const deleteEmployee = (req, res) => {
    const { id } = req.params;

}

// Upodate product by id (using patch method)
export const updateEmployee = (req, res) => {
    const { id } = req.params;
    
}