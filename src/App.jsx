import React from 'react'
import Navbar from './View/Navbar'
import { Routes, Route } from "react-router-dom";
import Cv from './View/Cv';
import About from './View/About';
import Project from './View/Project';


function App() {
  return (
    <>    
     <Navbar/>
      <Routes>
      <Route path='/cv' element={<Cv/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/project' element={<Project/>} />
      </Routes>
    </>
  )
}

export default App
