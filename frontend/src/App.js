import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from './Items_list.js';
import Home from './Home.js';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/items" element={<Items/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
