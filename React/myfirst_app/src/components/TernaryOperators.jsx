// Ternary Operators: (condition) ? (statement1) : (Statement2)


import React from 'react'

const TernaryOpertaors = () => {

    const randomNum = Math.floor(Math.random()*10 +1)

    let luckyNum = 7;
  return (
    <div>
        <h1>Are you lucky on? {randomNum}</h1>
        {randomNum === "luckyNum"?
        <h1>You have a Good Luck</h1>
        : <h1>Ooh!You have a bad luck..</h1>
        }
    </div>
  )
}

export default TernaryOpertaors