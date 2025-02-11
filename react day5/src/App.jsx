import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
