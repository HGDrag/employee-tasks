import React from 'react'
import Employees from './components/Employees.js'
import PostFormEmployee from './components/PostFormEmployee.js'
import PostFormTask from './components/PostFormTask.js'
import Tasks from './components/Tasks.js'
import CompletedTasks from './components/CompletedTasks.js'
import './App.css'
const App = () => {

  return (
    <>
    <PostFormEmployee/>
    <br></br>
    <PostFormTask/>
    <br></br>
    <div className='objectWrapper'>
      <Tasks />
      <Employees/>
    </div>
    <CompletedTasks/>
    </>
  )
}

export default App