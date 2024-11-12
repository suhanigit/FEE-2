import React from 'react'

const LearnJSX = () => {

    //Variables and conditional statements return se bahr likjte hai(Lengthy logics)
    const random = Math.floor(Math.random()*10 +1);


  return (
    <div>
        <h1>Learn JSX</h1>

        <h2>Random: {Math.floor(Math.random()*5 +1)}</h2>
        <h3>Random Number 1 to 10: (random)</h3>
    </div>
  )
}

export default LearnJSX