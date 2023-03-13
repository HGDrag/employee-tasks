import fs from 'fs';
//services 
import { appendToStorage } from '../services/appendToStorage.js';
import { deleteStorageObject } from '../services/deleteStorageObject.js';
import { getStorageObject } from '../services/getStorageObject.js';
import { getObjectsByType } from '../services/getObjectsByType.js';

//storage path 
const PATH = './storage/storage.json'

// Return all tasks
export const getTasks = (req , res) => getObjectsByType(PATH, 'task', data => res.send(data));
   
// Create task
export const createTask = (req, res) => appendToStorage(PATH, req.body, 'task', data => res.send(data));
  
// Get task by id
export const getTaskById = (req, res) => {
    const { id } = req.params;

    getStorageObject(PATH, id, data => res.send(data));
}

// Delete task by id
export const deleteTask = (req, res) => {
    const { id } = req.params;

    deleteStorageObject(PATH, id, data => res.send(data));
}

// Upodate task by id (using patch method)
export const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, assignee, dueDate } = req.body;
    
    fs.readFile(PATH, 'utf-8', (err, data) => {
        if(err) throw err;

        let storageData = JSON.parse(data);

        let foundTask = storageData.find(task => task.id === id);
                
        if(title)
            foundTask.title = title;

        if(description)
            foundTask.description = description;
        
        if(assignee)
            foundTask.assignee = assignee;
        
        if(dueDate)
            foundTask.dueDate = dueDate;
            
        fs.writeFile(PATH, JSON.stringify(storageData, null, 2), err => {
            if(err) throw err;
        })

        res.send(foundEmployee)
    });

}   