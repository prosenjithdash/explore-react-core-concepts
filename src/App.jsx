import './App.css'
import ToDo from './ToDo'
import ConditionalRendering from './conditionalRendering';
import Actor from './Actor';
import Singer from './Singer';

//38-3 JSX, Its Rules And Add Dynamic Content To JSX In Your First Component


// It's call components
function App() {

  // 38-8 (Advanced) Rendering Lists Of Users Using Map


  let actors = ['Labib', 'Kishor', 'Proshanto'];

  let singers = [
  
    {id: 1, name: 'Pritom', age: 24 },
    { id: 2, name: 'Chircut', age: 32 },
    { id: 3, name: 'KureGor', age: 25 }
    
  ]
  return (
    <>

      <h1>Vite + React</h1>


      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer> */}

      {/* <Device name = 'MacBook Air M1' price = '100000'></Device> 
      => (Receved as a Object) */}

      {/* <Device name = 'MacBook Air M1' price = '100000'></Device> 
      <Device name='MacBook Air M2' price='150000'></Device>
      <Device name='MacBook Pro M3' price='200000'></Device>
      <Public grate ='A' profesion = 'Web Developer'></Public>
      <Public grate='B' profesion='Business'></Public>
      <Public></Public> */}


      {/* 38 - 06 Read Only Props Two Way Of Conditional Rendering */}
      {/* <ToDo name='ReactJS'></ToDo>
      <ToDo name='Explore Core Concept part 01'></ToDo>
      <ToDo></ToDo> */}

      {/* 38-7 Six Ways To Do Conditional Rendering: If, Ternary And AND OR
       */}
      {/* <ConditionalRendering work='CSS' isDone={true}></ConditionalRendering>
      <ConditionalRendering work='HTML' isDone={true}></ConditionalRendering>
      <ConditionalRendering work='ReactJs' isDone={false}></ConditionalRendering> */}

      {/* // 38-8 (Advanced) Rendering Lists Of Users Using Map */}

      {/* <Actor name='Prosenjith Dash Pappu'></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      
     
      
      {
        singers.map(singer => <Singer singer = {singer}></Singer>)
      }



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
// style appllyed with CSS File

function Student() {
  const studentsInfo = {
    name: 'Prosenjith Dash Pappu',
    age: 24,
    uniName: 'Daffodil International University.'
  }
  return (
    <div className='student'> 
      <h1>Student Information:</h1>
      <p>My name is {studentsInfo.name} . I am {studentsInfo.age} years old. My university name is {studentsInfo.uniName}</p>
    </div>
  )
}


//-----------------------------------------------------------------------------


//38 - 4 Explore JSX And Props Basics
// style added with css style object

// create  component no 03
function Developer(){

  const DeveloperStyle = {
    margin: '10px',
    padding: '5px',
    border: '2px solid red',
    borderRadius: '10px'

  }
  return (
    <div style={DeveloperStyle}>
      <h2>Developer Info:</h2>
      <p>Coding: </p>
    </div>
  )
}

// create  component no 04
// Dynamically Access Data with props
function Device(props) {
  // JSX : JavaScript XML (JavaScript Syntex Extension)
  return (
    <div>
      <h2>Device Name: {props.name} and Price is {props.price }</h2>
    </div>
  )
}

//38-5 Prop Types And How To Pass/Read A Prop

// create  component no 05
// Distsureing 


// const { grate, profesion } = { grate: 'A', profesion: 'Web Developer' }

function Public({ grate = 'None', profesion = 'None' }) {


  return (
    <div>
      <h2>Public Lavel:- </h2>
      <p>Grate: {grate}</p>
      <p>Profetion:{profesion} </p>
    </div>
  )
}






export default App
