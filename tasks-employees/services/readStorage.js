import fs from 'fs';

export const readStorage = (path, callback) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err) throw err;
        callback(data)

        // let storageData = JSON.parse(data);

        // if(type === 'employee'){
        //     storageData = storageData.filter(object => object.type === 'employee')
        //     callback(storageData);
        // }

        // if(type === 'task'){
        //     storageData = storageData.filter(object => object.type === 'task')
        //     callback(storageData);
        // }

    });
}