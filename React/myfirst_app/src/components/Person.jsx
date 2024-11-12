import React from 'react'
import './Person.css'

const Person = (props) => {
  return (
    <div className='Person'>
        <h1>Name: {props.name}</h1>
        <h3>Age: {props.age}</h3>
        <p>Crush: {props.crush}</p>
    </div>
  )
}

export default Person;