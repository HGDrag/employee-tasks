import { readStorage } from "./readStorage.js";

export const displayFiveEmployees = (path, callback) => {
    readStorage(path, data => {

        let storageData = JSON.parse(data);

        const date = new Date();
        const employees = storageData.filter(obj => obj.type === 'employee');
        const tasks = storageData.filter(obj => obj.type === 'task');
        let sorted = [];
        employees.forEach(employee => {
            let taskCount = 0;

            tasks.forEach(task => {
                const splitter = '-'

                const taskMonth = task.dueDate.split(splitter)[0];

                if(employee.fullName === task.assignee && (`0${date.getMonth()}` <= `0${taskMonth - 1}` && `0${taskMonth - 1}` < `0${date.getMonth() + 1}`))
                    taskCount++;
            });
            sorted.push({name: employee.fullName, completedTasks: taskCount});
            
        });
        
        console.log(sorted)
        sorted.sort((a, b) => { return b.completedTasks - a.completedTasks });
        callback(sorted)
    }) 
}