import fs from 'fs';
import { readStorage } from './readStorage.js';
import { v4 as uuidv4 } from 'uuid';

export const appendToStorage = (path, newData, type, callback) => {
    readStorage(path, (data) => {
        let storageData  = JSON.parse(data);

        storageData.push({... newData, id:uuidv4(), type})

        fs.writeFile(path, JSON.stringify(storageData, null, 2), err => {
            if(err) throw err;

            console.log('Data is saved');
        });
        callback(storageData);
    });

}
