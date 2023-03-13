import fs from 'fs';
import { readStorage } from './readStorage.js';

export const deleteStorageObject = (path, id, callback) => {
    readStorage(path, data => {
        let storageData = JSON.parse(data);

        storageData = storageData.filter(object => object.id !== id);

        fs.writeFile(path, JSON.stringify(storageData, null, 2), err => {
            if(err) throw err;
            console.log('Object is deleted');
        });

        callback(storageData);
    });
}
