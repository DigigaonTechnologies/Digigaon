
import './App.css'
import Nav from './Components/Nav'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Fotter from "./Components/Fotter";
import UnderC from './Components/SubComponents/UnderC';
import Contect from './Components/Contect';
import Services from './Components/Services';
import About from './Components/About';
import TopReach from './Components/SubComponents/TopReach';


function App() {

  return (
    < >
     {/* <UnderC/> */}
      <TopReach/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contect' element={<Contect/>} ></Route>
        <Route path='/services' element={<Services/>} ></Route>
      </Routes>
      <Fotter/>
    
    </>
  )
}

export default App
