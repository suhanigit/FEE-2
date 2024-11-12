import React from 'react'
import { useState } from 'react';  // use state is used to chnage the state
// use state returns two things  an array with value and function which executes the given task

const State = () => {
    // let count = 0;


    let [count,addCount] = useState(0);

    // let handleCount = () =>{
    //     // count = count +1;
    //     // console.log(count);
    //     // addCount(count+1);
    // }


  return (
    <div>
        <h1>Count is: {count}</h1>
        <button onClick={()=>addCount(count+1)}>Increase Count</button>
    </div>
  )
}

export default State