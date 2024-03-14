import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  
  return (
    <>
    
      <div>
        <h1>Welcome to React</h1>
        <Friends></Friends>
        <Team></Team>
        <Users></Users>
      </div>
      </>  
  )
}

function Student(props){
  const myStyle={
    color:"gray",
    border:"2px solid tomato",
    borderRadius:"20px",
    padding: "4px"
  }
  return(
    <h3 style={myStyle}>I am a student. My name is {props.name}. My ID is {props.id}</h3>
  )
}
export default App
