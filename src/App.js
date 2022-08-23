import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';

const App = () => {
  return (
    <div>
     <Box width="400px" sx={{width:{xl:'1448px'}}} m='auto'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
     </Box>

    </div>
  )
}

export default App

