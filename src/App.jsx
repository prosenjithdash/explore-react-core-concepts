import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//38-3 JSX, Its Rules And Add Dynamic Content To JSX In Your First Component


// It's call components
function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>

    </>
  )
}

// create  component no 01
function Person() {
  const age = 24;

  return (
    // age added dynamically
    <h2>I am Person. Age is {age}</h2>
  )
}

// create  component no 02
function Student() {
  const studentsInfo = {
    name: 'Prosenjith Dash Pappu',
    age: 24,
    uniName:'Daffodil International University.'
  }
  return (
    <>
      <h1>Student Information:</h1>
      <p>My name is {studentsInfo.name} . I am {studentsInfo.age} years old. My university name is {studentsInfo.uniName}</p>
    </>
  )
}

export default App
