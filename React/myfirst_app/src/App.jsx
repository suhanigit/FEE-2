// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react'
import './App.css'
// import LearnJSX from './components/LearnJSX'
import TernaryOperators from './components/TernaryOperators';
// import Person from './components/Person';
import Books from './components/Books';

const App = () => {
  return (
    //<LearnJSX/>
    // <TernaryOpertaors/>
    <>
    {/* // props are used to manipulate the data immutable aur vo as objects jata ha hmaare parent components le andr */}
      {/* <Person name="Tushar" age="23" crush="Siya"/>
      <Person name="Ranjit" age="22" crush="Riya"/>
      <Person name="Sid" age="21" crush="Rishika"/> */}

      <Books name=" The Book Thief" author="Markus Zusak" year="1965"/>
      <Books name=" Pride and Prejudice" author="Jane Austen" year="2000"/>
      <Books name=" It starts with Us" author="Coolen Hoover" year="1999"/>
    </>
  )
}

export default App;