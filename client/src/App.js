import React,{ useState,useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './elements/Home';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home endpoint='issues' />} />
        <Route path='/characters' element={<Home endpoint='characters' />} />
        <Route path='/creators' element={<Home endpoint='creators' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App