import fs from 'fs';
//services 
import { appendToStorage } from '../services/appendToStorage.js';
import { deleteStorageObject } from '../services/deleteStorageObject.js';
import { getStorageObject } from '../services/getStorageObject.js';
import { getObjectsByType } from '../services/getObjectsByType.js';
import { displayFiveEmployees } from '../services/displayFiveEmployees.js';

//storage path 
const PATH = './storage/storage.json'

// Return all employees
export const getEmployees = (req , res) => getObjectsByType(PATH, 'employee', data => res.send(data));

export const topFive = (req, res) => displayFiveEmployees(PATH, data => res.send(data));

// Create employee
export const createEmployee = (req, res) => appendToStorage(PATH, req.body, 'employee', data => res.send(data));
  
 // Get employee by id
export const getEmployeeById = (req, res) => {
    const { id } = req.params;

    getStorageObject(PATH, id, data => res.send(data));
}

// Delete employee by id
export const deleteEmployee = (req, res) => {
    const { id } = req.params;

    deleteStorageObject(PATH, id, data => res.send(data));
}

// Upodate employee by id (using patch method)
export const updateEmployee = (req, res) => {
    const { id } = req.params;
    const { fullName, email, salary, dateOfBirth, phoneNumber } = req.body;
    
    fs.readFile(PATH, 'utf-8', (err, data) => {
        if(err) throw err;

        let storageData = JSON.parse(data);

        let foundEmployee = storageData.find(employee => employee.id === id);
                
        if(fullName)
            foundEmployee.fullName = fullName;

        if(email)
            foundEmployee.email = email;
        
        if(salary)
            foundEmployee.salary = salary;
        
        if(dateOfBirth)
            foundEmployee.dateOfBirth = dateOfBirth;
            
        if(phoneNumber)
            foundEmployee.phoneNumber = phoneNumber;

        fs.writeFile(PATH, JSON.stringify(storageData, null, 2), err => {
            if(err) throw err;
        })

        res.send(foundEmployee)
    });

}   