import React from 'react'
import './Books.css'

const Books = (props) => {
  return (
    <div className='Books'>
        <h1>Book:{props.name}</h1>
        <h3>Author: {props.author}</h3>
        <p>Publish Year:{props.year}</p>
    </div>
  )
}

export default Books