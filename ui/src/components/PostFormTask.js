import React, {useState, useEffect} from 'react'

const PostFormTask = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getEmployees = () => {
            fetch("/employees")
            .then(response => response.json())
            .then( employees => setEmployees(employees));

        }
        return () => getEmployees()
      }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { title, description, assignee, dueDate }

        fetch('/tasks', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(() => {
            console.log('new task added')
        })

    }

  return (
    <div>
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Create task</legend>
                <div>
                    <input type="text" value={title} onChange = {(e) => setTitle(e.target.value)} placeholder="Title" required></input>
                </div>
                <div>
                    <input type="text" value={description} onChange = {(e) => setDescription(e.target.value)} placeholder="Decription" required></input>
                </div>
                <div>
                    <label>Assignee: </label>
                    <select onChange = {(e) => setAssignee(e.target.value)}>
                        <option>-</option>
                        {
                            employees.map(employee => <option value={employee.fullName} key = {employee.id}>{employee.fullName} </option>)
                            
                        }
                    </select>
                </div>
                <div>
                    <label>Due date</label>
                    <input type="date" value={dueDate} onChange = {(e) => setDueDate(e.target.value)} placeholder="Due date" required></input>
                </div>
              
                <button type='submit'>Create Task</button>
                        </fieldset>
            </form>
     
        </>
    </div>
  )
}

export default PostFormTask