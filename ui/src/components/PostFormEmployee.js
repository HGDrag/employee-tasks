import React, {useState} from 'react'

const PostFormEmployee = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        const employee = { fullName, email, salary, dateOfBirth, phoneNumber }

        fetch('/employees', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(employee)
        }).then(() => {
            console.log('new employee added')
        })

    }

  return (
    <div>
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Create Employee</legend>
                <div>
                    <input type="text" value={fullName} onChange = {(e) => setFullName(e.target.value)} placeholder="Full Name" required></input>
                </div>
                <div>
                    <input type="email" value={email} onChange = {(e) => setEmail(e.target.value)} placeholder="Email" required></input>
                </div>
                <div>
                    <input type="text" value={salary} onChange = {(e) => setSalary(e.target.value)} placeholder="Salary" required></input>
                </div>
                <div>
                    <label>Birth date: </label>
                    <input type="date" value={dateOfBirth} onChange = {(e) => setDateOfBirth(e.target.value)} placeholder="Birth date" required></input>
                </div>
                <div>
                    <input type="number" value={phoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)} placeholder="Phone number" required></input>
                </div>
                <button type='submit'>Create Employee</button>
                </fieldset>
            </form>
        </>

    </div>
  )
}

export default PostFormEmployee