import React, { useState, useEffect } from 'react'


const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = () => {
            fetch("/tasks/")
            .then(response => response.json())
            .then( tasks => setTasks(tasks));

        }
        return () => getTasks()
      }, [])

    return (
        <div>
            <h1>Tasks: </h1>
        {
            tasks.map(task => 
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <h4>assignee: {task.assignee}</h4>
                    <h5>Due date: {task.dueDate}</h5>
                    <p>Description: {task.description}</p>
                </div>
            )
        }
        </div>
    )

}

export default Tasks