import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Person from './components/Person.jsx'
import TernaryOpertaors from './components/TernaryOperators.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Person></Person>
  <Person></Person>
  <Person></Person> */}
  {/* <App></App> */}
  {/* <TernaryOpertaors></TernaryOpertaors> */}
  <Navbar></Navbar>
  </StrictMode>
)
