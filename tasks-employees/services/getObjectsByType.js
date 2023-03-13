import { readStorage } from "./readStorage.js";

export const getObjectsByType = (path, type, callback) => {
    readStorage(path, data => {
        let storageData = JSON.parse(data);

        if(type === 'employee'){
            storageData = storageData.filter(object => object.type === 'employee')
            callback(storageData);
        }
    
        if(type === 'task'){
            storageData = storageData.filter(object => object.type === 'task')
            callback(storageData);
        }
    });
}
