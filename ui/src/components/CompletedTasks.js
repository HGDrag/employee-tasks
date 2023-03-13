import React, {useState, useEffect} from 'react'

const CompletedTasks = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = () => {
            fetch("/employees/sorted")
            .then(response => response.json())
            .then( data => setData(data));
        }
        return () => getData()
      }, [])
  return (
    <div>
        {
            data.map((employee, i) => <p key={i}>{employee.name} completed {employee.completedTasks} tasks. </p>)
        }
    </div>
  )
}

export default CompletedTasks