import { readStorage } from "./readStorage.js"

export const getStorageObject = (path, id, callback) => {
    readStorage(path, data => {
        const storageData = JSON.parse(data);

        const found = storageData.find(object => object.id === id);

        callback(found);
    });
}