import React, {useState, useEffect } from 'react'

const Employees = () => {

    const[employees, setEmployees] = useState([])
    useEffect(() => {
    const getEmployees = () => {
        fetch("/employees")
        .then(response => response.json())
        .then( employees => setEmployees(employees));

    }
    return () => getEmployees()
    }, [])
  return (
    <div>
        <h1>Employees: </h1>
        {
            employees.map(employee => 
                <div key={employee.id}>
                    <h3>Name: {employee.fullName}</h3>
                    <p>Email: {employee.email}</p>
                    <p>Phone number: {employee.phoneNumber}</p>
                    <p>Birth date: {employee.dateOfBirth}</p>
                    <p>Salary: {employee.salary}</p>
                </div>
            )
        }
        </div>
  )
}

export default Employees