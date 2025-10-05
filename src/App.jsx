
import './App.css'
import Nav from './Components/Nav'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Fotter from "./Components/Fotter";
import UnderC from './Components/SubComponents/UnderC';
import Contect from './Components/Contect';
import Sidebar from './Components/SubComponents/Sidebar';
import Services from './Components/Services';


function App() {

  return (
    < >
     {/* <UnderC/> */}
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        {/* <Route path='/about' element={<div>About</div>} ></Route> */}
        <Route path='/contect' element={<Contect/>} ></Route>
        <Route path='/services' element={<Services/>} ></Route>
      </Routes>
      <Sidebar/>
      <Fotter ></Fotter>
    
    </>
  )
}

export default App
